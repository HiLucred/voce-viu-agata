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
  backgroundColor: "$white",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  zIndex: 999999,
  transform: "translate(-50%, -50%)",
  width: "30rem",
  height: "25rem",
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  "&:focus": { outline: "none" },
  display: "flex",
  flexDirection: "column",

  form: {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "1.3rem",

    button: {
      marginTop: "1rem",
      height: "4rem",
      border: "none",
      backgroundColor: "$red",
      color: "$white",
      fontWeight: "bold",
      cursor: "pointer",

      "&:hover": {
        opacity: 0.8,
      },
    },
  },

  input: {
    padding: "1rem",
    width: "100%",
    border: "1px solid $black",
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

  "&:hover": { backgroundColor: "red" },
  "&:focus": { boxShadow: `0 0 0 2px $red200` },
});
