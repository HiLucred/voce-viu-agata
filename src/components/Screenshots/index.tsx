import { Container } from "./styles";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import screenshot from "../../assets/screenshot.png";
import screenshot2 from "../../assets/screenshot2.png";

export function Screenshots() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    // breakpoints: {
    //   "(min-width: 400px)": {
    //     slides: { perView: 2, spacing: 0 },
    //   },
    //   "(min-width: 1000px)": {
    //     slides: { perView: 3, spacing: 4 },
    //   },
    // },
    slides: { perView: 2 },
  });

  return (
    <Container ref={ref} className="keen-slider">
      <Image
        src={screenshot}
        width={452}
        height={400}
        alt=""
        className="keen-slider__slide number-slide1"
      />

      <Image
        src={screenshot2}
        width={452}
        height={400}
        alt=""
        className="keen-slider__slide number-slide1"
      />

      <Image
        src={screenshot}
        width={452}
        height={400}
        alt=""
        className="keen-slider__slide number-slide1"
      />

      <Image
        src={screenshot2}
        width={452}
        height={400}
        alt=""
        className="keen-slider__slide number-slide1"
      />

      <Image
        src={screenshot}
        width={452}
        height={400}
        alt=""
        className="keen-slider__slide number-slide1"
      />
    </Container>
  );
}
