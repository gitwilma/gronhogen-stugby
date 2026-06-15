export const typography = {
  display: {
    large: {
      fontFamily: "var(--font-heading)",
      fontSize: "72px",
      lineHeight: "1.1",
      fontWeight: 500,
    },

    medium: {
      fontFamily: "var(--font-heading)",
      fontSize: "56px",
      lineHeight: "1.1",
      fontWeight: 500,
    },
  },

  heading: {
    large: {
      fontFamily: "var(--font-heading)",
      fontSize: "48px",
      lineHeight: "1.2",
      fontWeight: 500,
    },

    medium: {
      fontFamily: "var(--font-heading)",
      fontSize: "32px",
      lineHeight: "1.2",
      fontWeight: 500,
    },

    small: {
      fontFamily: "var(--font-heading)",
      fontSize: "24px",
      lineHeight: "1.3",
      fontWeight: 500,
    },
  },

  body: {
    large: {
      fontFamily: "var(--font-body)",
      fontSize: "18px",
      lineHeight: "1.7",
      fontWeight: 400,
    },

    medium: {
      fontFamily: "var(--font-body)",
      fontSize: "16px",
      lineHeight: "1.7",
      fontWeight: 400,
    },

    small: {
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      lineHeight: "1.6",
      fontWeight: 400,
    },
  },
} as const;