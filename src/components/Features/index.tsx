import Image from "next/image";
import { Container, Content, Info, Text } from "./styles";
import screenshot from "../../assets/screenshot.png";
import { Title } from "../Typography";

export function Features() {
  return (
    <Container>
      <Content>
        <Info>
          <Image src={screenshot} alt="" />

          <Text>
            <Title size={"big"} weight={"bold"} color={"black"}>
              EXPLORE ENTRE AS PASTAS E ARQUIVOS.
            </Title>
            <Title color={"black"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, w
            </Title>
          </Text>
        </Info>

        <Info>
          <Text>
            <Title size={"big"} weight={"bold"} color={"black"}>
              EXPLORE ENTRE AS PASTAS E ARQUIVOS.
            </Title>
            <Title color={"black"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, w
            </Title>
          </Text>

          <Image src={screenshot} alt="" />
        </Info>
      </Content>
    </Container>
  );
}
