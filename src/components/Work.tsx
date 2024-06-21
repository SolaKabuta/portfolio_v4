import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"


export const Work = () => {
    return (
        <section>
            <div
                className={'flex justify-between pt-44'}>
                <h2
                    id={'work'}
                    className={'font-black text-7xl py-20 text_anim transition hover:translate-x-6 ease-in-out duration-700'}>
                    Work.
                </h2>
            </div>
            <div className={'flex justify-around gap-5 flex-col lg:flex-row'}>
                {/* CABINET COPPENS */}
                <div className={'relative w-[800px] h-[500px] transition hover:translate-x-4 ease-in-out duration-700'}>
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
                <div className={'relative w-[800px] h-[500px] transition hover:-translate-x-4 ease-in-out duration-700'}>
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
                className={'flex justify-center py-10 transition duration-300 md:justify-start lg:justify-end lg:py-20'}
                href='more'><Button className={'uppercase rounded-2xl transition duration-300 hover:bg-second_color hover:text-main_color'} variant="outline">See more</Button>
            </Link>
        </section>
    );
};