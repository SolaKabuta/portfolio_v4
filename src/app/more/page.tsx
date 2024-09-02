import Link from "next/link";
import {HeroParallaxDemo} from "@/components/ui/hero-parallax";


const thumbnails = [
    {
        src: "/assets/thumbnails/coppens_imac.png",
    },
    {
        src: "/assets/thumbnails/martine_thumbnail.png",
    }
]



export default function more () {
    return <>
        <main className={''}>
            <HeroParallaxDemo/>
        </main>
    </>
}
