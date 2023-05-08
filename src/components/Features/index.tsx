import Image from "next/image";
import { Box, Container, Fita1, Fita2, Info } from "./styles";
import { Paragraph, Title } from "../Typography";
import screenshot from "../../assets/screenshot.png";
import fita from "../../assets/fita-fix.png";

export function Features() {
  return (
    <Container>
      <Box>
        <Fita1>
          <Image src={fita} alt="" width={94} height={94} />
        </Fita1>
        <Fita2>
          <Image src={fita} alt="" width={94} height={94} />
        </Fita2>

        <Image src={screenshot} alt="" width={172} height={172} />

        <Info>
          <Title size={"bigger"} color={"red200"} weight={'bold'}>
            TÍTULO DE ALGUMA FEATURE
          </Title>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            nihil aliquid obcaecati velit ratione numquam rerum molestias
            possimus totam. Nisi id velit molestiae, possimus officiis dolores
            quo. Vel, recusandae doloremque.
          </Paragraph>
        </Info>
      </Box>

      <Box>
        <Fita1>
          <Image src={fita} alt="" width={94} height={94} />
        </Fita1>
        <Fita2>
          <Image src={fita} alt="" width={94} height={94} />
        </Fita2>

        <Info>
          <Title size={"bigger"} color={"red200"} weight={'bold'}>
            TÍTULO DE ALGUMA FEATURE
          </Title>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            nihil aliquid obcaecati velit ratione numquam rerum molestias
            possimus totam. Nisi id velit molestiae, possimus officiis dolores
            quo. Vel, recusandae doloremque.
          </Paragraph>
        </Info>
        
        <Image src={screenshot} alt="" width={172} height={172} />
      </Box>

      <Box>
        <Fita1>
          <Image src={fita} alt="" width={94} height={94} />
        </Fita1>
        <Fita2>
          <Image src={fita} alt="" width={94} height={94} />
        </Fita2>

        <Image src={screenshot} alt="" width={172} height={172} />

        <Info>
          <Title size={"bigger"} color={"red200"} weight={'bold'}>
            TÍTULO DE ALGUMA FEATURE
          </Title>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            nihil aliquid obcaecati velit ratione numquam rerum molestias
            possimus totam. Nisi id velit molestiae, possimus officiis dolores
            quo. Vel, recusandae doloremque.
          </Paragraph>
        </Info>
      </Box>
    </Container>
  );
}
