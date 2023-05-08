import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss, theme, css, keyframes } =
  createStitches({
    theme: {
      fonts: {
        default: "Nunito, sans-serif",
      },

      fontWeights: {
        regular: "400",
        medium: "500",
        bold: "700",
      },

      lineHeights: {
        shorter: "125%",
        short: "140%",
        base: "160%",
        tall: "180%",
      },

      colors: {
        white: "#FFFFFF",
        black: "#000000",
        background: "#130816",
        gray: "#101010",
        red: "#FF5050",
        red200: "#C32725",
      },

      radii: {
        xs: "2.5px",
        sm: "5px",
        md: "8px",
        lg: "20px",
        full: "99999px",
      },
    },
  });
