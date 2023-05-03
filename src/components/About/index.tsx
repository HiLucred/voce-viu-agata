import Image from "next/image";
import { Title } from "../Typography";
import { Container, Content, Description, Text, Video } from "./styles";
import notbook from "../../assets/notbook.png";
import fingerPrint from "../../assets/finger-print.png";

export function About() {
  return (
    <Container>
      <Content>
        <Text>
          <Title size={"bigger"}>
            VOCÊ ACHOU O COMPUTADOR DA <span>GAROTA DESAPARECIDA</span>.
            <br></br>
            VASCULHE ENTRE OS DIRETÓRIOS E DESCUBRA <b>SUA HISTÓRIA.</b>
          </Title>

          <Description>
            <Title>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into e
            </Title>
          </Description>

          {/* <Image src={fingerPrint} alt="" /> */}
        </Text>

        <Video>
          <Image src={notbook} alt="" />
          <a href="https://gyazo.com/5456d0261a61851bd0e45b7a7a202e4f">
            <video width="590" muted autoPlay loop>
              <source
                src="https://i.gyazo.com/5456d0261a61851bd0e45b7a7a202e4f.mp4"
                type="video/mp4"
              />
            </video>
          </a>
        </Video>
      </Content>
    </Container>
  );
}
