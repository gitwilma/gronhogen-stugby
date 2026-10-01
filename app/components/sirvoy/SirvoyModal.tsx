"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import SirvoyWidget from "./SirvoyWidget";
import { colors } from "@/app/theme/colors";

type Props = {
  formId: string;
  buttonLabel?: string;
  buttonClassName?: string;
  modalClassName?: string;
  ariaLabel?: string;
};

export default function SirvoyModal({
  formId,
  buttonLabel = "Boka direkt",
  buttonClassName,
  modalClassName,
  ariaLabel = "Öppna bokningsdialog",
}: Props) {
  const [open, setOpen] = useState(false);
  const [modalRoot] = useState<HTMLElement | null>(() => {
    if (typeof document === "undefined") return null;
    let root = document.getElementById(
      "__sirvoy_modal_root",
    ) as HTMLElement | null;
    if (!root) {
      root = document.createElement("div");
      root.id = "__sirvoy_modal_root";
      document.body.appendChild(root);
    }
    return root;
  });
  const lastActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    if (open) {
      lastActiveElement.current = document.activeElement as HTMLElement | null;
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lastActiveElement.current?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);
  const openModal = () => setOpen(true);

  const modal = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Sirvoy bokning"
      className={modalClassName}
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
        }}
      />

      <div
        style={{
          position: "relative",
          background: "#fff",
          maxWidth: "900px",
          width: "min(95%, 900px)",
          maxHeight: "85vh",
          overflow: "auto",
          borderRadius: 8,
          padding: 20,
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        }}
      >
        <button
          onClick={close}
          aria-label="Stäng bokningsdialog"
          style={{
            position: "absolute",
            right: 12,
            top: 12,
            background: "transparent",
            border: "none",
            fontSize: 18,
            cursor: "pointer",
          }}
        >
          ×
        </button>

        <SirvoyWidget
          formId={formId}
          targetId={`sirvoy-modal-root-${formId}`}
        />

        <div id={`sirvoy-modal-root-${formId}`} />
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        aria-label={ariaLabel}
        className={buttonClassName}
        style={{
          cursor: "pointer",
          padding: "10px 16px",
          borderRadius: 6,
          border: "none",
          backgroundColor: colors.brand.accent,
          color: "white",
          fontWeight: 600,
        }}
      >
        {buttonLabel}
      </button>

      {open && modalRoot ? createPortal(modal, modalRoot) : null}
    </>
  );
}
