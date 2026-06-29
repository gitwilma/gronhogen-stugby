export const colors = {
  background: {
    base: "#FDF9F6",
    surface: "#FFFFFF",
    elevated: "#F4EBE0",
    subtle: "#DDD6C8",
  },

  text: {
    primary: "#000000",
    secondary: "#4D433D",
    inverse: "#FFFFFF",
    inverseMuted: "rgba(255,255,255,0.88)",
  },

  brand: {
    primary: "#6F7B63",
    primaryHover: "#5F6B54",

    secondary: "#BFC9B5",
    secondaryHover: "#AEB8A4",

    accent: "#7A96A8",
    editorial: "#EF7B52",
  },

  border: {
    default: "#DDD6C8",
    strong: "#4D433D",
  },

  state: {
    hover: "#DDD6C8",
    pressed: "#D2C9B8",
    disabled: "#E5E0D8",
  },

  focus: {
    ring: "#7A96A8",
  },
} as const;
