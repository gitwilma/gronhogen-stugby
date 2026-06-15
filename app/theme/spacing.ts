export const spacing = {
  none: "0px",

  xxxs: "2px",
  xxs: "4px",
  xs: "8px",
  sm: "12px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "48px",
  xxxl: "64px",
  huge: "96px",

  section: {
    sm: "64px",
    md: "96px",
    lg: "128px",
  },
} as const;

export type Spacing = typeof spacing;
