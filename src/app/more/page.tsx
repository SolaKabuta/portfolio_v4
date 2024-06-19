import {Header} from "@/components/Header";
import Link from "next/link";


export default function more () {
    return <>
        <main className={'bg-third_color'}>
            <section className={'hover:text-main_color bg-third_color'}>
                <Header/>
            </section>
            {/*DIVIDER*/}
            {/*    <div className={'h-screen z-10 bg-main_color w-1'}></div>*/}
            <div className={'h-screen grid place-items-center'}>
                <section>
                    <div className={'flex justify-between text-center gap-56 py-44'}>
                        <Link href='more/playground'>
                            <h5 className={'font-black text-7xl transition hover:-translate-x-6 ease-in-out duration-700 hover:text-main_color'}>
                                Playground <br/>
                                <span className={'font-light text-sm'}>
                                    (stylish name for side projects)
                                </span>
                            </h5>
                        </Link>
                        <Link
                            href='more/photography'>
                            <h6
                                className={'font-black text-7xl transition hover:translate-x-6 ease-in-out duration-700 hover:text-main_color'}>
                                Photography <br/>
                                <span className={'font-light text-sm'}>
                                    (Yes developers can do art stuff too)
                                </span>
                            </h6>
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    </>
}
