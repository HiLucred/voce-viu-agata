import Image from "next/image";
import { ContactBox, ContactButton, Container, Game } from "./styles";
import poster from "../../assets/Poster.png";
import itchioButton from "../../assets/itchio-button.svg";
import retiroAPlutao from "../../assets/retiro-a-plutao-logo.png";
import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Title } from "../Typography";

export function Contact() {
  return (
    <Container id="contact">
      <Game>
        <Image src={poster} alt="" width={300} />
        <Image src={itchioButton} alt="" width={300} />
      </Game>

      <ContactBox>
        <ContactButton>
          <TwitterLogoIcon color="white" />
        </ContactButton>

        <ContactButton>
          <InstagramLogoIcon color="white" />
        </ContactButton>

        <ContactButton>
          <LinkedInLogoIcon color="white" />
        </ContactButton>
      </ContactBox>

      {/* <Image src={retiroAPlutao} alt="" width={400} /> */}
    </Container>
  );
}
