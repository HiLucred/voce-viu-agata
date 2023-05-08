import { About } from "@/components/About";
import { BlurSeparator } from "@/components/BlurSeparator";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { Intro } from "@/components/Intro";
import { JoinUs } from "@/components/JoinUs";
import { NavBar } from "@/components/NavBar";
import { Screenshots } from "@/components/Screenshots";

export default function Home() {
  return (
    <>
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