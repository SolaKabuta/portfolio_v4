import {Header} from "@/components/Header";


export default function more () {
    return <main className={'bg-third_color h-screen grid place-items-center'}>
        {/*DIVIDER*/}
        <div className={'h-screen bg-main_color w-1 absolute'}></div>
        <section>
            <div className={'sticky top-0'}>
                <Header/>
            </div>
            <div className={'flex justify-between text-center gap-56 py-44'}>
                <a href="">
                    <h5 className={'font-black text-7xl transition hover:-translate-x-6 ease-in-out duration-700'}>
                    Playground <br/>
                    <span className={'font-light text-sm'}>(stylish name for side projects)</span>
                </h5>
                </a>
                <a href="">
                    <h6 className={'font-black text-7xl transition hover:translate-x-6 ease-in-out duration-700'}>
                        Photography <br/>
                        <span className={'font-light text-sm'}>(Yes developers can do art stuff too)</span>
                    </h6>
                </a>
            </div>
        </section>
    </main>
}
