import { Container, Content, Item } from "./styles";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import screenshot from "../../assets/screenshot.png";
import screenshot2 from "../../assets/screenshot2.png";
import screenshot3 from "../../assets/screenshot3.png";
import screenshot4 from "../../assets/screenshot4.png";
import screenshot5 from "../../assets/screenshot5.png";
import screenshot6 from "../../assets/screenshot6.png";
import screenshot7 from "../../assets/screenshot7.png";
import screenshot8 from "../../assets/screenshot8.png";
import { Title } from "../Typography";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";

export function Screenshots() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
    slides: { perView: 1 },
    loop: true,
  });

  return (
    <Container id="screenshots">
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
          <Image src={screenshot3} alt="" />
        </Item>

        <Item className="keen-slider__slide number-slide1">
          <Image src={screenshot4} alt="" />
        </Item>

        <Item className="keen-slider__slide number-slide1">
          <Image src={screenshot5} alt="" />
        </Item>

        <Item className="keen-slider__slide number-slide1">
          <Image src={screenshot6} alt="" />
        </Item>

        <Item className="keen-slider__slide number-slide1">
          <Image src={screenshot7} alt="" />
        </Item>

        <Item className="keen-slider__slide number-slide1">
          <Image src={screenshot8} alt="" />
        </Item>
      </Content>
    </Container>
  );
}
