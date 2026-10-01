"use client";

import { useEffect, useRef } from "react";

type Props = {
  formId: string;
  targetId?: string;
  scriptSrc?: string;
  maxAttempts?: number;
};

export default function SirvoyWidget({
  formId,
  targetId = "sirvoy-root",
  scriptSrc = "https://secured.sirvoy.com/widget/sirvoy.js",
  maxAttempts = 40,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const selectors = [
      "[data-sirvoy-widget]",
      ".sirvoy-widget",
      ".sirvoy-embed",
      "#sirvoy",
      '[id^="sirvoy"]',
      "div[data-form-id]",
    ];

    const getWidget = (): Element | null => {
      return (selectors.map((s) => document.querySelector(s)).find(Boolean) ??
        null) as Element | null;
    };

    const target = () => document.getElementById(targetId);

    const tryMove = () => {
      const widget = getWidget();
      const t = target();
      if (!widget || !t) return false;
      if (widget.parentElement === t) return true;

      if (widget.contains(t)) return false;

      try {
        t.appendChild(widget);
        return true;
      } catch (e) {
        console.warn("Sirvoy: could not move widget:", e);
        return false;
      }
    };

    let attempts = 0;
    const interval = window.setInterval(() => {
      attempts += 1;
      const moved = tryMove();
      if (moved || attempts >= maxAttempts) {
        window.clearInterval(interval);
      }
    }, 200);

    const observer = new MutationObserver(() => {
      if (tryMove()) {
        observer.disconnect();
        window.clearInterval(interval);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    let createdScript: HTMLScriptElement | null = null;
    try {
      const already = Array.from(document.querySelectorAll("script")).find(
        (s) =>
          s.getAttribute("src") === scriptSrc &&
          s.getAttribute("data-form-id") === formId,
      );

      if (!already) {
        const scriptEl = document.createElement("script");
        scriptEl.src = scriptSrc;
        scriptEl.async = true;
        scriptEl.setAttribute("data-form-id", formId);

        const appendTarget =
          containerRef.current ??
          document.getElementById(targetId) ??
          document.body;
        appendTarget.appendChild(scriptEl);
        createdScript = scriptEl;
      }
    } catch (e) {
      console.warn("Sirvoy: failed to insert script element", e);
    }

    return () => {
      window.clearInterval(interval);
      observer.disconnect();
      if (createdScript && createdScript.parentElement) {
        createdScript.parentElement.removeChild(createdScript);
      }
    };
  }, [formId, targetId, maxAttempts, scriptSrc]);

  return (
    <>
      <div id={targetId} ref={containerRef} />

      <noscript>
        <div style={{ marginTop: 16 }}>
          <p>
            JavaScript behöver vara aktiverat för att visa bokningsformuläret.
            Besök
            <a
              href={`https://secured.sirvoy.com/forms/${formId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              bokningssidan
            </a>
            .
          </p>
        </div>
      </noscript>
    </>
  );
}
