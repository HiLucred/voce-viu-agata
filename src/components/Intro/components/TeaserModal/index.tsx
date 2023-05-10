import * as Dialog from "@radix-ui/react-dialog";
import { Overlay } from "./styles";

export function TeaserModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Dialog.Content></Dialog.Content>
    </Dialog.Portal>
  );
}
