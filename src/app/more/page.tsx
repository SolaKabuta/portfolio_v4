import {Header} from "@/components/Header";
import Link from "next/link";


export default function more () {
    return <main className={'bg-third_color h-screen grid place-items-center'}>
        {/*DIVIDER*/}
        <div className={'h-screen bg-main_color w-1 absolute'}></div>
        <section>
                <div className={'hover:text-main_color'}>
                    <Header/>
                </div>
            <div className={'flex justify-between text-center gap-56 py-44'}>
                <a href="">
                    <h5 className={'font-black text-7xl transition hover:-translate-x-6 ease-in-out duration-700 hover:text-main_color'}>
                    Playground <br/>
                    <span className={'font-light text-sm'}>(stylish name for side projects)</span>
                </h5>
                </a>
                <Link
                    href='more/photography'>
                    <h6
                    className={'font-black text-7xl transition hover:translate-x-6 ease-in-out duration-700 hover:text-main_color'}>
                    Photography <br/>
                    <span className={'font-light text-sm'}>(Yes developers can do art stuff too)</span>
                </h6>
                </Link>
            </div>
        </section>
    </main>
}
