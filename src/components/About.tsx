import Image from "next/image";


const style = {
    txt: 'hover:text-third_color duration-700 transition ease-in-out',
}

const images = [
    {
        className: style.img,
        src: '/assets/icons/stack/logo_original.svg',
        alt: 'portrait of Sola',

    },
    // {
    //     className: style.img_center,
    //     src: '/assets/images/portrait2_web.jpg',
    //     alt: 'portrait of Sola',
    // },
    // {
    //     className: style.img,
    //     src: '/assets/images/portrait3_web.jpg',
    //     alt: 'portrait of Sola',
    // },
];

export const About = () => {
    return (
        <section>
            <div className={'flex justify-between items-end pt-20'}>

                <div className={''}>
                    <h3
                        id={'about'}
                        className={'font-black text-7xl py-28 text_anim transition hover:translate-x-6 ease-in-out duration-700'}>
                        <span className={style.txt}>About</span> <span className={style.txt}>me.</span>
                    </h3>
                    <p className={'py-10 w-[500px] transition hover:translate-x-6 ease-in-out duration-700 text-justify'}>
                        <span className={'py-10'}>My name is Sola</span> <br/><br/>
                        <span className={'text-third_color font-bold hover:text-red-600 transition duration-300 ease-in-out'}>(pronounced « <span className={'duration-300 transition ease-in-out'}>sho . la</span> »)</span> <br/> <br/>

                        I Am a web developer based in bruxelles (belgium). <br/>
                        Before I delved into the world of coding, I stirred creativity in unconventional realms. <br/>
                        As a former bartender specializing in crafting intricate cocktails, I found artistry in
                        mixology, <br/>
                        blending flavors akin to the way I now blend lines of code. <br/>
                        Beyond the bar, my free moments found solace in music production, where rhythms and melodies
                        became
                        my palette. <br/>
                        Photography, a passion that bestowed upon me « the eye » for detail, captured fleeting moments
                        in
                        frames. <br/>
                        AND of course Gaming offered not just leisure but also a canvas for problem-solving. <br/>
                        Summer 2023 introduced me to coding, and unexpectedly, it became my addiction. <br/>
                        The logic (I mean, most of the time..) and creativity merged seamlessly, captivating me
                        wholly. <br/>
                        Now, my days are consumed by this newfound passion, as I weave the intricate tapestry of
                        technology,
                        design, and innovation through the world of coding.
                    </p>

                    {/* TECH STACK */}
                    {/*<p>*/}
                    {/*    tech stack :*/}
                    {/*</p>*/}
                    {/*<div>*/}
                    {/*    <Image src={images.src}*/}
                    {/*           alt={images.alt}*/}
                    {/*           width={400}*/}
                    {/*           height={900}*/}
                    {/*           loading={'lazy'}/>*/}
                    {/*</div>*/}

                    {/* EXPERIENCE */}
                    <p className={'py-5'}>
                        experience :
                    </p>
                    <p className={'py-10 transition hover:translate-x-6 ease-in-out duration-700'}>
                        from february to april 2024 <br/>
                        <a
                            className={'font-bold underline'}
                            href="https://mobilstudio.be/" target="_blank">Mobil studio
                        </a> <br/>
                        web developer & web integrator intern <br/>
                    </p>
                    <p className={'py-10 transition hover:translate-x-6 ease-in-out duration-700'}>
                        from august 2023 to april 2024 <br/>
                        <a
                            className={'font-bold underline'}
                            href="https://becode.org/fr/" target="_blank">BECODE BRussels
                        </a> <br/>
                        web developer trainee <br/>
                    </p>
                </div>
                <Image
                    className={'scale-110 py-20 px-5 transition hover:-translate-x-6 ease-in-out duration-700'}
                    src={'/assets/images/portrait2_web.jpg'}
                    alt={'portrait of Sola Kabuta smiling in a chair'}
                    width={'600'}
                    height={'900'}/>

            </div>
        </section>
    );
};
