import { PlayIcon, PlusIcon } from "@radix-ui/react-icons";
import { Poster } from "./components/Posters";
import { Title } from "../Typography";
import { ActionBox, Button, Container } from "./styles";
import { TeaserModal } from "./components/TeaserModal";
import * as Dialog from "@radix-ui/react-dialog";
import { NewsLetterModal } from "./components/NewsLetterModal";

export function Intro() {
  return (
    <Container id="home">
      <Poster />

      <ActionBox>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button>
              <Title weight={"bold"}>CONFIRA O TRAILER</Title>
              <PlayIcon color="white" />
            </Button>
          </Dialog.Trigger>

          <TeaserModal />
        </Dialog.Root>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button>
              <Title weight={"bold"}> NEWSLETTER</Title>
              <PlusIcon color="white" />
            </Button>
          </Dialog.Trigger>

          <NewsLetterModal />
        </Dialog.Root>
      </ActionBox>
    </Container>
  );
}
