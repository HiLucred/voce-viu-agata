import { styled } from "../../../stitches.config";
import background from "../../assets/quadro-detetive.jpg";

export const Container = styled("footer", {
  backgroundImage: `url(${background.src})`,
  width: "100%",
  height: "100%",
  paddingTop: "6rem",
  paddingBottom: "6rem",
  backgroundSize: "100%",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

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

export const Game = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginBottom: "2rem",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
});

export const ContactBox = styled("div", {
  display: "flex",
  gap: "1rem",
  marginBottom: "2rem",
});

export const ContactButton = styled("div", {
  padding: "1rem",
  backgroundColor: "$black",
  border: "1px solid white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});

export const ScrollToTop = styled("button", {
  padding: "1rem",
  backgroundColor: "$red",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",

  "&:hover": {
    opacity: 0.8,
  },
});
