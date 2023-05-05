import { styled } from "../../../stitches.config";

export const Container = styled("nav", {
  width: "100vw",
  height: "3rem",

  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 9999999,

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
    transition: "all 0.3s",

    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
      color: "$red",
      transition: "all 0.3s",
    },
  },
});
