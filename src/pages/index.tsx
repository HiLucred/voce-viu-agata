import { About } from "@/components/About";
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
        <Features />
      </main>
    </>
  );
}
