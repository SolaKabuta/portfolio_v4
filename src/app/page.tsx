import Image from "next/image";
import {Header} from "@/components/Header";
import {Hero} from "@/components/Hero";
import {Work} from "@/components/Work";
import {About} from "@/components/About";
import {Contact} from "@/components/Contact";
import {Footer} from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header/>
        <Hero/>
        <Work/>
      <About/>
        <Contact/>
        <Footer/>
    </main>
  );
}
