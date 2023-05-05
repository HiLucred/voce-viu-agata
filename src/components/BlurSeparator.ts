import { styled } from "../../stitches.config";
import background from "../assets/background-with-posters.png";

export const BlurSeparator = styled("div", {
  width: "100vw",
  height: "20rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  backgroundImage: `url(${background.src})`,
  backgroundColor: "$white",
  backgroundPosition: "center",
});