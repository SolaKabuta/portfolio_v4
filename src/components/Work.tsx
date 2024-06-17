import Link from "next/link";


export const Work = () => {
    return (
        <section>
            <div
                className={'flex justify-between pt-44'}>
                <h2 className={'font-black text-7xl py-20 text_anim transition hover:-translate-x-6 ease-in-out duration-700'}>
                    Work.
                </h2>
            </div>
            <div className={'flex justify-around'}>
                {/* CABINET COPPENS */}
                <div className={'w-[490px] h-[742px] bg-third_color'}>
                    <p className={'py-4 px-4'}>Cabinet Coppens - Experts-Comptables</p>
                    {/*<p className={''}>Web development</p>*/}
                </div>
                {/* MARTINE Henderyckx */}
                <div className={'w-[490px] h-[742px] bg-third_color'}>
                    <p className={'py-4 px-4'}>Martine Henderyckx</p>
                </div>
            </div>
            <Link
                className={'flex justify-end py-20'}
                href='more'>See more</Link>
        </section>
    );
};