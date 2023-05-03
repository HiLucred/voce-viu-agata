import { globalCss } from "../../stitches.config";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    backgroundColor: "$background",
    "-webkit-font-smoothing": "antialiased",
    boxSizing: "border-box",
    fontFamily: "Iosevka, monospace",
  },
});
