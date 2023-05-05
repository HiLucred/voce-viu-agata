import Image from "next/image";
import Link from "next/link";
import poster from "../../../../assets/Poster.png";
import itchio from "../../../../assets/itchio-button.svg";
import { Container, Info, MainPoster } from "./styles";

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
          <Link href="https://lucvang.itch.io/onde-est-gata" target="_blank">
            <Image src={itchio} alt={""} width={200} />
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
