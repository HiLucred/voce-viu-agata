import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "../../../../../stitches.config";

export const Container = styled("div");

export const Overlay = styled(Dialog.Overlay, {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  inset: 0,
  background: "rgba(0, 0, 0, 0.75)",
});
