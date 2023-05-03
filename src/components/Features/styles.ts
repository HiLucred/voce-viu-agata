import { styled } from "../../../stitches.config";
import containerBackground from "../../assets/background-with-posters.png";
import infoBackground from "../../assets/papel-amassado-adesivos.png";

export const Container = styled("section", {
  width: "100vw",
  height: "100vh",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  backgroundImage: `url(${containerBackground.src})`,
  backgroundRepeat: "no-repeat",
  backgroundColor: "$black",
});

export const Content = styled("div", {
  width: "64rem",
  height: "100%",
  padding: "10rem",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: '4rem',

  backgroundImage: `url(${infoBackground.src})`,
  backgroundRepeat: "no-repeat",
});

export const Info = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
});

export const Text = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
});
