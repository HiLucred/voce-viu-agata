import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  marginTop: "4rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const MainPoster = styled("div", {
  position: "relative",
});

export const Info = styled("div", {
  width: "100%",

  position: "absolute",
  bottom: "12%",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  transition: "0.3s",

  img: {
    transition: "0.3s",
    scale: "100%",
  },

  "a:hover": {
    transition: "0.3s",

    img: {
      scale: "130%",
      transition: "scale 0.3s",
    },
  },
});
