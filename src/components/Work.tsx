import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"


// TEST
const style = {
    txt: 'hover:text-black duration-700 transition ease-in-out',
}


export const Work = () => {
    return (
        <section>
            <div
                className={'flex justify-between pt-44 max-md:pt-5'}>
                <h2
                    data-aos="fade-zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    id={'work'}
                    className={'font-black max-md:text-4xl text-7xl py-20 max-md:py-0 text_anim transition hover:translate-x-6 ease-in-out duration-700'}>
                    <span className={style.txt}>My</span> <span className={style.txt}>work.</span>
                </h2>
            </div>
            {/* DESKTOP LAYOUT */}
            <div
                className={'max-lg:grid max-lg:place-items-start flex justify-around gap-5 max-md:gap-0 max-md:hidden'}>
                {/* CABINET COPPENS */}
                <div
                    className={'relative w-[800px] h-[500px] max-lg:scale-75 max-md:scale-50 origin-left transition hover:translate-x-4 ease-in-out duration-700 group'}>
                    {/* TEST */}
                    <p className={'absolute z-40 text-main font-black text-xl bottom-3 right-5 group-hover:animate-bounce group-hover:text-white invisible group-hover:visible transition duration-700 text-center group-hover:scale-125'}>
                        CLICK ME
                    </p>
                    {/*<p className={'absolute z-40 text-main_color py-4 px-4'}>*/}
                    {/*    Cabinet Coppens - Experts-Comptables*/}
                    {/*</p>*/}
                    <Link href={'/work/coppens'} className={'relative'}>
                        <Image
                            className={'object-cover group-hover:-translate-y-32 transition duration-700 z-50 rounded-2xl'}
                            src={'/assets/images/coppens_macbook.webp'}
                            alt={'cabinet coppens mockup'}
                            loading={'lazy'}
                            fill/>
                        <div className={'w-full h-full bg-black rounded-2xl'}>
                            <p className={'absolute bottom-0 z-30 text-main_color py-4 px-4 text-white font-bold'}>
                                Cabinet Coppens : <br/> <br/>
                                Mastering accounting <br/>
                                for balanced finances
                            </p>
                        </div>
                    </Link>
                </div>
                {/* MARTINE Henderyckx */}
                <div
                    className={'relative w-[800px] h-[500px] max-lg:scale-75 max-md:scale-50 origin-left transition hover:-translate-x-4 ease-in-out duration-700 group'}>
                    <p className={'absolute z-40 text-main font-black text-xl bottom-3 right-5 group-hover:animate-bounce group-hover:text-white invisible group-hover:visible transition duration-700 text-center group-hover:scale-125'}>
                        CLICK ME
                    </p>
                    {/*<p className={'absolute z-40 text-main_color py-4 px-4'}>*/}
                    {/*    Martine Henderyckx*/}
                    {/*</p>*/}
                    <Link href={'/work/martine'} className={'relative'}>
                        <Image
                            className={'object-cover group-hover:-translate-y-32 transition duration-700 z-50 rounded-2xl'}
                            src={'/assets/images/martine_macbook.webp'}
                            alt={'Martine Henderyckx mockup'}
                            fill={true}/>
                        <div className={'w-full h-full bg-black rounded-2xl'}>
                            <p className={'absolute bottom-0 z-30 text-main_color py-4 px-4 text-white font-bold'}>
                                Martine Henderyckx : <br/> <br/>
                                The art of guidance <br/>
                                for living in harmony with oneself
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
            <Link
                className={'flex justify-end max-lg:justify-start py-10 max-lg:py-0 transition duration-300'}
                href='/more'><Button
                className={'uppercase rounded-2xl transition duration-500 bg-black text-white hover:bg-white hover:text-main hover:scale-110 max-md:hidden'}
                variant="outline">See more</Button>
            </Link>



            {/*  MOBILE LAYOUT  */}
            {/* CABINET COPPENS */}
            <div className={'grid gap-10 pt-20'}>
                <div
                    className={'relative w-[800px] h-[500px] max-lg:w-[300px] max-lg:h-[300px] max-lg:pb-20 origin-left transition hover:translate-x-4 ease-in-out duration-700 md:hidden'}>
                    {/* TEST */}
                    {/*<p className={'absolute z-40 text-blue-600 font-black text-2xl py-[40%] px-[45%] group-hover:text-white transition duration-700 text-center group-hover:scale-125'}>*/}
                    {/*    CLICK ME*/}
                    {/*</p>*/}
                    <Link href={'/work/coppens'}>
                        <Image
                            className={'object-cover rounded-2xl'}
                            src={'/assets/images/coppens_macbook.jpg'}
                            alt={'cabinet coppens mockup'}
                            fill={true}/>
                    </Link>
                </div>
                <p className={'text-main md:hidden'}>
                    Cabinet Coppens <br/>
                    Experts-Comptables
                </p>
                {/* MARTINE Henderyckx */}
                <div className={''}>
                    <div
                        className={'relative w-[800px] h-[500px] max-lg:w-[300px] max-lg:h-[300px]  origin-left transition hover:-translate-x-4 ease-in-out duration-700 md:hidden'}>
                        <Link href={'/work/martine'}>
                            <Image
                                className={'object-cover rounded-2xl'}
                                src={'/assets/images/martine_macbook.webp'}
                                alt={'Martine Henderyckx mockup'}
                                fill={true}/>
                        </Link>
                    </div>
                    <p className={'py-6 text-main md:hidden'}>
                        Martine Henderyckx
                    </p>
                    <Link
                        className={'flex justify-start transition duration-300'}
                        href='/more'>
                        <Button
                        className={'uppercase rounded-2xl transition duration-500 bg-black text-white hover:bg-white hover:text-main hover:scale-110 mt-10 md:hidden'}
                        variant="outline">
                            See more
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};