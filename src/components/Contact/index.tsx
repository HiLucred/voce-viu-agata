import Image from "next/image";
import {
  ContactBox,
  ContactButton,
  Container,
  Game,
  ScrollToTop,
} from "./styles";
import poster from "../../assets/Poster.png";
import itchioButton from "../../assets/itchio-button.svg";
import retiroAPlutao from "../../assets/retiro-a-plutao-logo.png";
import {
  ArrowUpIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { animateScroll as scroll } from "react-scroll";

export function Contact() {
  return (
    <Container id="contact">
      <Game>
        <Image src={poster} alt="" width={300} />
        <Link href={"https://lucvang.itch.io/onde-est-gata"} target="_blank">
          <Image src={itchioButton} alt="" width={300} />
        </Link>
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

      <ScrollToTop onClick={() => scroll.scrollToTop()}>
        <ArrowUpIcon />
      </ScrollToTop>
      {/* <Image src={retiroAPlutao} alt="" width={400} /> */}
    </Container>
  );
}
