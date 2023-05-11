import { styled } from "../../../stitches.config";

export const Container = styled("section", {
  maxWidth: 1200,
  height: "30rem",
  paddingTop: "4rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  margin: "0 auto",
  marginBottom: "4rem",

  h2: {
    paddingTop: "4rem",
    paddingBottom: "2rem",
  },

  span: {
    color: "$white",
    position: "absolute",
    top: "3rem",
    right: 0,
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
});

export const Content = styled("div", {
  maxWidth: 1200,
  paddingTop: "2rem",
  paddingBottom: "2rem",

  img: {
    boxShadow: "4px 4px 4px 1px rgba(0, 0, 0, 0.5)",
  },
});

export const Item = styled("div", {
  width: "30rem",
});
