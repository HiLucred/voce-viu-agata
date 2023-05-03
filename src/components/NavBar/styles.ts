import { styled } from "../../../stitches.config";

export const Container = styled("nav", {
  width: "100vw",
  height: "3rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderBottom: "1px solid $white",
  backgroundColor: "$black",
});

export const Menu = styled("ul", {
  display: "flex",
  gap: "1rem",

  li: {
    listStyleType: "none",
    color: "$white",

    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
});
