import { styled } from "../../../stitches.config";
import background from "../../assets/finger-prints-background.png";

export const Container = styled("div", {
  width: "100%",
  height: "40rem",
  backgroundColor: "$white",
  backgroundImage: `url(${background.src})`,

  backgroundPosition: "center",
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
