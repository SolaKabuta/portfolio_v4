"use client";

import Image from "next/image";


const style = {
    txt: 'hover:text-third_color duration-700 transition ease-in-out',
}

// Tech Stack line one :
const images = [
    {
        src: '/assets/icons/stack/WebStorm logo.svg',
        alt: 'Webstorm logo',

    },
    {
        src: '/assets/icons/stack/NextJS icon.svg',
        alt: 'NextJS logo',
    },
    {
        src: '/assets/icons/stack/React (1).svg',
        alt: 'React logo',
    },
    {
        src: '/assets/icons/stack/icon TailwindCSS.svg',
        alt: 'TailwindCSS logo',
    },
    {
        src: '/assets/icons/stack/Git icon.svg',
        alt: 'Git logo',
    },
];
// Tech Stack line two :
const images2 = [
    {
        src: 'assets/icons/stack/Wordpress icon.svg',
        alt: 'Wordpress logo',
    },
    {
        src: 'assets/icons/stack/Icon Elementor.svg',
        alt: 'Elementor logo',
    },
    {
        src: 'assets/icons/stack/Figma (2).svg',
        alt: 'Figma logo',
    },
    {
        src: 'assets/icons/stack/Adobe XD (1).svg',
        alt: 'XD logo',
    },
    {
        src: 'assets/icons/stack/Adobe Illustrator.svg',
        alt: 'Illustrator logo',
    },
];

export const About = () => {
    return (
        <section>
            <div className={'flex justify-between items-center pt-20'}>

                <div className={'max-md:text-xs'}>
                    <h3
                        id={'about'}
                        className={'font-black max-md:text-4xl text-7xl py-28 text_anim transition hover:translate-x-6 ease-in-out duration-700'}>
                        <span className={style.txt}>About</span> <span className={style.txt}>me.</span>
                    </h3>
                    <p className={'py-10 w-[500px] transition hover:translate-x-6 ease-in-out duration-700 text-justify'}>
                        <span className={'py-10'}>My name is Sola</span> <br/><br/>
                        <span
                            className={'text-third_color font-bold hover:text-red-600 transition duration-300 ease-in-out'}>
                            (pronounced « <span className={'duration-300 transition ease-in-out'}>sho . la</span> »)</span> <br/> <br/>

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
                    <p className={'py-5'}>
                        tech stack :
                    </p>
                    <div
                        data-aos="fade-zoom-in"
                         data-aos-easing="ease-in-sine"
                         data-aos-duration="700"
                         data-aos-anchor-placement="bottom-bottom"
                         className={'flex gap-5 py-5'}>
                        {images.map((image, index) => (
                            <Image
                                key={index}
                                className={'hover:scale-110 transition duration-700'}
                                src={image.src}
                                alt={image.alt}
                                width={60}
                                height={60}
                                loading={'lazy'}/>
                        ))}
                    </div>
                    <div
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1000"
                        data-aos-anchor-placement="bottom-bottom"
                        className={'flex gap-5 py-5'}>
                        {images2.map((image, index) => (
                            <Image
                                key={index}
                                className={'hover:scale-110 transition duration-700'}
                                src={image.src}
                                alt={image.alt}
                                width={60}
                                height={60}
                                loading={'lazy'}/>
                        ))}
                    </div>

                    {/* EXPERIENCE */}
                    <p className={'py-5'}>
                        experience :
                    </p>
                    <p className={'py-10 transition hover:translate-x-6 ease-in-out duration-700'}>
                        from february to april 2024 <br/>
                        <a
                            className={'font-bold underline hover:text-black duration-700 transition ease-in-out'}
                            href="https://mobilstudio.be/" target="_blank">Mobil studio
                        </a> <br/>
                        web developer & web integrator intern <br/>
                    </p>
                    <p className={'py-10 transition hover:translate-x-6 ease-in-out duration-700'}>
                        from august 2023 to april 2024 <br/>
                        <a
                            className={'font-bold underline hover:text-black duration-700 transition ease-in-out'}
                            href="https://becode.org/fr/" target="_blank">BECODE BRussels
                        </a> <br/>
                        web developer trainee <br/>
                    </p>
                </div>
                <Image
                    className={'scale-110 pt-20 px-5 transition hover:-translate-x-6 ease-in-out duration-700 max-lg:hidden'}
                    src={'/assets/images/portrait2_web.jpg'}
                    alt={'portrait of Sola Kabuta sitting in a chair'}
                    width={'600'}
                    height={'900'}/>

            </div>
        </section>
    );
};
