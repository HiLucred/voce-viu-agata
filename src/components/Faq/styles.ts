import { styled } from "../../../stitches.config";
import background from "../../assets/finger-prints-background.png";
import background2 from "../../assets/Papel-amassado.jpg";

export const Container = styled("div", {
  width: "100%",
  height: "40rem",
  backgroundColor: "$white",

  borderTop: "4px solid $white",
  borderBottom: "4px solid $white",
  position: "relative",
  zIndex: 99999,

  "&::before": {
    content: "",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    position: "absolute",
    zIndex: -10,
    backgroundImage: `url(${background.src}), url(${background2.src})`,
    backgroundPosition: "center",

    filter: "blur(2px)",
    opacity: 0.5
  },
});

export const Content = styled("section", {
  width: "100%",
  height: "100%",
  maxWidth: 1200,
  margin: "0 auto",
  display: "flex",
  gap: "3rem",
  alignItems: "center",
});
