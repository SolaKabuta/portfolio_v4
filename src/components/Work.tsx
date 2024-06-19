import Link from "next/link";
import Image from "next/image";


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
            <div className={'flex justify-around gap-5'}>
                {/* CABINET COPPENS */}
                <div className={'relative w-[800px] h-[500px] transition hover:translate-x-4 ease-in-out duration-700'}>
                    <p className={'absolute z-40 text-main_color py-4 px-4'}>
                        Cabinet Coppens - Experts-Comptables
                    </p>
                    <Link href={'/coppens'}>
                        <Image
                        className={'object-cover'}
                        src={'/coppens_macbook.jpg'}
                        alt={'cabinet coppens mockup'}
                        fill={true}/>
                    </Link>
                </div>
                {/* MARTINE Henderyckx */}
                <div className={'relative w-[800px] h-[500px] transition hover:-translate-x-4 ease-in-out duration-700'}>
                    <p className={'absolute z-40 text-main_color py-4 px-4'}>
                        Martine Henderyckx
                    </p>
                    <Link href={'/martine'}>
                        <Image
                            className={'object-cover'}
                            src={'/martine_macbook.jpg'}
                            alt={'Martine Henderyckx mockup'}
                            fill={true}/>
                    </Link>
                </div>
            </div>
            <Link
                className={'flex justify-end py-20'}
                href='more'>See more
            </Link>
        </section>
    );
};