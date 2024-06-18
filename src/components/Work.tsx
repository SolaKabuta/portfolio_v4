import Link from "next/link";
import Image from "next/image";


export const Work = () => {
    return (
        <section>
            <div
                className={'flex justify-between pt-44'}>
                <h2
                    id={'work'}
                    className={'font-black text-7xl py-20 text_anim transition hover:-translate-x-6 ease-in-out duration-700'}>
                    Work.
                </h2>
            </div>
            <div className={'flex justify-around'}>
                {/* CABINET COPPENS */}
                <div>
                    <p className={'absolute z-40 text-main_color py-4 px-4'}>Cabinet Coppens - Experts-Comptables</p>
                    <Image
                        src={'/coppens_macbook.jpg'}
                        alt={'cabinet coppens mockup'}
                        width={700}
                        height={700}
                        loading="lazy"/>
                </div>
                {/* MARTINE Henderyckx */}
                <div className={''}>
                    <p className={'absolute z-40 text-main_color py-4 px-4'}>Martine Henderyckx</p>
                    <Image
                        className={'cover'}
                        src={'/martine_macbook.jpg'}
                        alt={'Martine Henderyckx mockup'}
                        width={675}
                        height={675}
                        loading="lazy"/>
                </div>
            </div>
            <Link
                className={'flex justify-end py-20'}
                href='more'>See more
            </Link>
        </section>
    );
};