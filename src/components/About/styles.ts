import { styled } from "../../../stitches.config";
import background from "../../assets/finger-prints-background.png";

export const Container = styled("section", {
  width: "100%",
  backgroundColor: "$gray",
  paddingTop: "6rem",
  paddingBottom: "6rem",
});

export const Content = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "5rem",
});

export const Text = styled("div", {
  width: 600,
  height: 644,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "2rem",

  span: {
    color: "$red",
    fontWeight: '$bold'
  },

  backgroundImage: `url(${background.src})`,
  backgroundRepeat: "no-repeat",
});

export const Description = styled("div", {
  marginTop: "8rem",
  borderTop: "1px solid $white",
  borderBottom: "1px solid $white",
  paddingTop: "1.25rem",
  paddingBottom: "1.25rem",
});

export const Notbook = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  zIndex: 10,

  a: {
    position: "absolute",
    top: "10%",
    left: "13.6%",
    zIndex: 0,
  },
});
