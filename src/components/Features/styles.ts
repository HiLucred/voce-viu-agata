import { styled } from "../../../stitches.config";
import background from "../../assets/Papel-amassado.jpg";

export const Container = styled("section", {
  paddingTop: "6rem",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  backgroundColor: "$white",
});

export const Box = styled("div", {
  padding: "3rem",
  marginBottom: "4rem",
  position: "relative",
  boxShadow: "0 4px 2px 1px rgba(0, 0, 0, 0.2)",

  width: "50rem",
  height: "15rem",

  backgroundImage: `url(${background.src})`,

  display: "flex",
  gap: "2rem",

  img: {
    // borderRadius: "$full",
  },

  h2: {
    textDecoration: 'underline'
  }
});

export const Fita1 = styled("div", {
  position: "absolute",
  top: "-2rem",
  left: "-2rem",
});

export const Fita2 = styled("div", {
  position: "absolute",
  bottom: "-2rem",
  right: "-2rem",
});

export const Info = styled("div", {
  height: "100%",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});
