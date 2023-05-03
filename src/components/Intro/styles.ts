import { styled } from "../../../stitches.config";

export const Container = styled("header", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
  paddingBottom: '2rem'
});

export const Button = styled("button", {
  backgroundColor: "transparent",
  border: "1px solid $white",
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  padding: "1rem",
  transition: "all 0.5s",

  "&:hover": {
    cursor: "pointer",
    backgroundColor: "$black",
    transition: "all 0.5s",
  },
});

export const ActionBox = styled("div", {
  display: "flex",
  gap: "1rem",
});
