import Image from "next/image";
import {Header} from "@/components/Header";
import {Hero} from "@/components/Hero";
import {Work} from "@/components/Work";

export default function Home() {
  return (
    <main>
      <Header/>
        <Hero/>
        <Work/>
    </main>
  );
}
