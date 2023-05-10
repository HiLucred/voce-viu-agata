import { About } from "@/components/About";
import { BlurSeparator } from "@/components/BlurSeparator";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { Intro } from "@/components/Intro";
import { JoinUs } from "@/components/JoinUs";
import { NavBar } from "@/components/NavBar";
import { Screenshots } from "@/components/Screenshots";
import Head from "next/head";
import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

export default function Home() {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <Head>
        <title>Você viu Ágata?</title>
      </Head>

      <NavBar />
      <Intro />

      <main>
        <About />
        <Features />
        <BlurSeparator />
        <Screenshots />
        <Faq />
        <JoinUs />
        <Contact />
      </main>
    </>
  );
}
