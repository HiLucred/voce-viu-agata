import { About } from "@/components/About";
import { BlurSeparator } from "@/components/BlurSeparator";
import { Features } from "@/components/Features";
import { Intro } from "@/components/Intro";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Intro />

      <main>
        <About />
        <BlurSeparator />
        <Features />
      </main>
    </>
  );
}
