import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { DialogContent, IconButton, Overlay } from "./styles";

export function TeaserModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <DialogContent>
        <iframe
          src="https://www.youtube.com/embed/RD9X_NOrYGU?controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <Dialog.Close asChild>
          <IconButton aria-label="Close">
            <Cross2Icon />
          </IconButton>
        </Dialog.Close>
      </DialogContent>
    </Dialog.Portal>
  );
}
