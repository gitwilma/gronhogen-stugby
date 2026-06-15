export const radius = {
  none: "0px",
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "20px",
  xl: "32px",
  full: "999px",
} as const;

export type Radius = typeof radius;
