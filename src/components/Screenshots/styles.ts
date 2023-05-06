import { styled } from "../../../stitches.config";

export const Container = styled("section", {
  maxWidth: 1200,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "30rem",
  position: "relative",
  margin: "0 auto",
  marginBottom: '4rem',

  h2: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },

  span: {
    color: "$white",
    position: "absolute",
    top: "5rem",
    right: 0,
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
});

export const Content = styled("div", {
  maxWidth: 1200,
  borderTop: "1px solid $white",
  borderBottom: "1px solid $white",
  paddingTop: "2rem",
  paddingBottom: "2rem",

  img: {
    boxShadow: "4px 4px 4px 1px rgba(0, 0, 0, 0.5)",
  },
});

export const Item = styled("div", {
  width: "30rem",
});
