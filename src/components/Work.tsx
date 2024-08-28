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
            <div
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="500"
                className={'max-lg:grid max-lg:place-items-start flex justify-around gap-5 max-md:gap-0 scale-75'}>
                {/* CABINET COPPENS */}
                <div className={'relative w-[800px] h-[500px] max-lg:scale-75 max-md:scale-50 origin-left transition hover:translate-x-4 ease-in-out duration-700 group'}>
                    {/* TEST */}
                    {/*<p className={'absolute z-40 text-blue-600 font-black text-2xl py-[40%] px-[45%] group-hover:text-white transition duration-700 text-center group-hover:scale-125'}>*/}
                    {/*    CLICK ME*/}
                    {/*</p>*/}
                    <p className={'absolute z-40 text-main_color py-4 px-4'}>
                        Cabinet Coppens - Experts-Comptables
                    </p>
                    <Link href={'/work/coppens'}>
                        <Image
                        className={'object-cover'}
                        src={'/assets/images/coppens_macbook.jpg'}
                        alt={'cabinet coppens mockup'}
                        fill={true}/>
                    </Link>
                </div>
                {/* MARTINE Henderyckx */}
                <div className={'relative w-[800px] h-[500px] max-lg:scale-75 max-md:scale-50 origin-top-left transition hover:-translate-x-4 ease-in-out duration-700'}>
                    <p className={'absolute z-40 text-main_color py-4 px-4'}>
                        Martine Henderyckx
                    </p>
                    <Link href={'/work/martine'}>
                        <Image
                            className={'object-cover'}
                            src={'/assets/images/martine_macbook.jpg'}
                            alt={'Martine Henderyckx mockup'}
                            fill={true}/>
                    </Link>
                </div>
            </div>
            <Link
                className={'flex justify-end max-lg:justify-start py-10 max-lg:py-0 transition duration-300'}
                href='more'><Button className={'uppercase rounded-2xl transition duration-300 bg-second_color text-main_color hover:bg-black hover:text-main_color hover:rotate-6'} variant="outline">See more</Button>
            </Link>
        </section>
    );
};