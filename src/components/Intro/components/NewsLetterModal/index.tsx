import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { DialogContent, IconButton, Overlay } from "./styles";

export function NewsLetterModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <DialogContent>
        <Dialog.Title>Assine nossa NewsLetter!</Dialog.Title>
        <Dialog.Description>
          e fique antenado as novidas semanais de "Você viu Ágata?"
        </Dialog.Description>

        <form>
          <label>
            SEU NOME
            <input type="text" placeholder="Digite aqui seu nome"></input>
          </label>

          <label>
            SEU E-MAIL
            <input type="text" placeholder="Digite aqui seu e-mail"></input>
          </label>

          <button>ASSINAR</button>
        </form>

        <Dialog.Close asChild>
          <IconButton aria-label="Close">
            <Cross2Icon />
          </IconButton>
        </Dialog.Close>
      </DialogContent>
    </Dialog.Portal>
  );
}
