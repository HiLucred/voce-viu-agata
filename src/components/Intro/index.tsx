import { PlayIcon, PlusIcon } from "@radix-ui/react-icons";
import { Poster } from "./components/Posters";
import { Title } from "../Typography";
import { ActionBox, Button, Container } from "./styles";

export function Intro() {
  return (
    <Container id="home">
      <Poster />

      <ActionBox>
        <Button>
          <Title weight={"bold"}>CONFIRA O TEASER</Title>
          <PlayIcon color="white" />
        </Button>

        <Button>
          <Title weight={"bold"}> NEWSLETTER</Title>
          <PlusIcon color="white" />
        </Button>
      </ActionBox>
    </Container>
  );
}
