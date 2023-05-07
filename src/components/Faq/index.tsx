import Image from "next/image";
import { Accordion } from "./Accordion";
import { Container, Content } from "./styles";
import photo from "../../assets/Agata.png";

export function Faq() {
  return (
    <Container>
      <Content>
        <Image src={photo} alt="" width={400} />
        <Accordion />
      </Content>
    </Container>
  );
}
