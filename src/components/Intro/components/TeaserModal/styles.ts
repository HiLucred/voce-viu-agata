import * as Dialog from "@radix-ui/react-dialog";
import { styled, keyframes } from "../../../../../stitches.config";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

export const Overlay = styled(Dialog.Overlay, {
  position: "fixed",
  zIndex: 888888,
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  background: "rgba(0, 0, 0, 0.75)",
});

export const DialogContent = styled(Dialog.Content, {
  backgroundColor: "$black",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  zIndex: 9999999,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80%",
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  "&:focus": { outline: "none" },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  iframe: {
    width: "80%",
    height: "80%",
  },
});

export const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$red200",
  position: "absolute",
  top: 10,
  right: 10,

  "&:hover": { backgroundColor: "$white" },
  "&:focus": { boxShadow: `0 0 0 2px $red200` },
});
