

export const Work = () => {
    return (
        <section>
            <div
                className={'flex justify-between pt-44'}>
                <h2 className={'font-black text-7xl py-20'}>
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
            <a
                className={'flex justify-end py-20'}
                href="#see more">See more</a>
        </section>
    );
};