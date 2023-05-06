import { Container, Content, Item } from "./styles";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import screenshot from "../../assets/screenshot.png";
import screenshot2 from "../../assets/screenshot2.png";
import { Title } from "../Typography";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";

export function Screenshots() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 5 },
      },
    },
    slides: { perView: 1 },
    loop: true,
  });

  return (
    <Container>
      <Title size={"bigger"}>[ SCREENSHOTS ]</Title>
      <span>
        deslize para o lado <DoubleArrowRightIcon />
      </span>

      <Content ref={ref} className="keen-slider">
        <Item className="keen-slider__slide number-slide1">
          <Image src={screenshot} alt="" />
        </Item>

        <Item className="keen-slider__slide number-slide1">
          <Image src={screenshot2} alt="" />
        </Item>

        <Item className="keen-slider__slide number-slide1">
          <Image src={screenshot} alt="" />
        </Item>

        <Item className="keen-slider__slide number-slide1">
          <Image src={screenshot2} alt="" />
        </Item>
      </Content>
    </Container>
  );
}
