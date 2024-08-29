import Link from "next/link";




export default function more () {
    return <>
        <main className={''}>
            {/*DIVIDER*/}
            {/*    <div className={' z-10 bg-main_color absolute w-1'}></div>*/}
            <div className={'h-screen grid place-items-center bg-third_color z-30'}>
                {/*<div className={'opacity-75 bg-black h-screen w-screen z-30'}></div>*/}
                <section>
                    <div className={'flex flex-col md:flex-row justify-between text-center gap-56 z-50'}>
                        <Link href='more/playground'>
                            <h5 className={'font-black text-4xl md:text-7xl transition hover:-translate-x-6 ease-in-out duration-700 hover:text-black max-md:pb-44'}>
                                Playground <br/>
                                <span
                                    className={'font-light text-sm'}>
                                    (stylish name for side projects)
                                </span>
                            </h5>
                        </Link>
                        <Link
                            href='more/photography'>
                            <h6 className={'font-black text-4xl md:text-7xl transition hover:translate-x-6 ease-in-out duration-700 hover:text-black'}>
                                Photography <br/>
                                <span className={'font-light text-sm'}>
                                    (Yes developers can do art stuff too)
                                </span>
                            </h6>
                        </Link>
                    </div>
                </section>
                <div className={'md:hidden w-full h-2 bg-main_color absolute top-1/2'}>

                </div>
            </div>
        </main>
    </>
}
