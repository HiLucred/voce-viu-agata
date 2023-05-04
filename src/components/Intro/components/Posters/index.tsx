import Image from "next/image";
import Link from "next/link";
import poster from "../../../../assets/Poster.png";
import itchio from "../../../../assets/itchio.png";
import { Container, Info, MainPoster } from "./styles";
import { Title } from "../../../Typography";

export function Poster() {
  return (
    <Container>
      <Image
        src={poster}
        alt={""}
        width={300}
        style={{ filter: "blur(2px)" }}
      />

      <MainPoster>
        <Image src={poster} alt={""} width={600} />

        <Info>
          <Title size={"big"} color={"black"} weight={"bold"}>
            JOGUE AGORA MESMO
          </Title>
          
          <Link href="https://lucvang.itch.io/onde-est-gata">
            <Image src={itchio} alt={""} width={100} />
          </Link>
        </Info>
      </MainPoster>

      <Image
        src={poster}
        alt={""}
        width={300}
        style={{ filter: "blur(2px)" }}
      />
    </Container>
  );
}
