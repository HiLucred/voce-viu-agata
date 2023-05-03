import { styled } from "../../stitches.config";

export const Title = styled("h2", {
  fontFamily: "Iosevka, monospace",

  variants: {
    size: {
      bigger: {
        fontSize: "2.25rem",
      },
      big: {
        fontSize: "1.25rem",
      },
      md: {
        fontSize: "1rem",
      },
    },

    color: {
      black: {
        color: "#000000",
      },
      white: {
        color: "$white",
      },
      red: {
        color: "$red",
      },
    },

    weight: {
      medium: {
        fontWeight: "$medium",
      },
      bold: {
        fontWeight: "$bold",
      },
    },
  },

  defaultVariants: {
    size: "md",
    color: "white",
    weight: "medium",
  },
});
