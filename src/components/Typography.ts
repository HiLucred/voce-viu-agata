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
      red200: {
        color: "$red200",
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

export const Paragraph = styled("p", {
  fontFamily: "Iosevka, monospace",
  fontSize: "1rem",

  variants: {
    color: {
      white: {
        color: "$white",
      },
      black: {
        color: "$black",
      },
    },
  },

  defaultVariants: {
    color: "black",
  },
});
