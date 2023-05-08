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
  marginBottom: '2rem'
});

export const ContactButton = styled("div", {
  padding: "1rem",
  backgroundColor: "$black",
  border: "1px solid white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
