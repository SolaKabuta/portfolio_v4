"use client";

import Image from "next/image";

const style = {
    txt: 'hover:text-black duration-700 transition ease-in-out',
    icons: "duration-700 transition ease-in-out hover:rotate-12 hover:scale-110",
    links: "duration-700 transition ease-in-out hover:rotate-12 hover:scale-110",
};

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
        src: '/assets/icons/stack/twind.svg',
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
            <div className={'flex justify-between items-center max-lg:grid pt-20'}>

                <div className={'max-md:text-xs'}>
                    <h3
                        id={'about'}
                        className={'font-black max-md:text-4xl text-7xl py-28 max-md:py-5 text_anim transition hover:translate-x-6 ease-in-out duration-700'}>
                        <span className={style.txt}>About</span> <span className={style.txt}>me.</span>
                    </h3>
                    <p className={'py-10 text-xl w-[500px] transition hover:translate-x-6 ease-in-out duration-700 text-justify max-lg:w-11/12 text-pretty'}>
                        <span className={'py-10'}>My name is Sola</span> <br/><br/>
                        <span
                            className={'text-third_color font-bold hover:text-black transition duration-300 ease-in-out'}>
                            (pronounced « <span className={'duration-300 transition ease-in-out'}>sho . la</span> »)</span> <br/> <br/>

                        I Am a web developer based in Brussels (belgium). <br/>
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
                    {/* To align images correctly after scaling them down I used "origin-left" */}
                    <div className={'max-md:scale-75 origin-left relative'}>
                        <div
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="700"
                            data-aos-anchor-placement="bottom-bottom"
                            className={'flex gap-5 py-5 items-center'}>
                            {images.map((image, index) => (
                                <Image
                                    key={index}
                                    className={style.icons}
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
                            className={'flex gap-5 py-5 justify-start relative'}>
                            {images2.map((image, index) => (
                                <Image
                                    key={index}
                                    className={style.icons}
                                    src={image.src}
                                    alt={image.alt}
                                    width={60}
                                    height={60}
                                    loading={'lazy'}/>
                            ))}
                        </div>
                    </div>

                    {/* EXPERIENCE */}
                    <p className={'py-5'}>
                        experience :
                    </p>
                    <p className={'py-10 transition hover:translate-x-6 ease-in-out duration-700'}>
                        from february to april 2024 <br/>
                        <a
                            className={'font-bold underline hover:text-black duration-700 transition ease-in-out flex gap-2 group'}
                            href="https://mobilstudio.be/" target="_blank">Mobil studio
                            <span className={'origin-center invisible transition duration-700 ease-in-out group-hover:visible'}>
                                <Image src={'assets/icons/heart.svg'} alt={'heart icon'} width={20} height={20}/>
                            </span>
                        </a>
                        web developer & web integrator intern <br/>
                    </p>
                    <p className={'py-10 transition hover:translate-x-6 ease-in-out duration-700'}>
                        from august 2023 to april 2024 <br/>
                        <a
                            className={'font-bold underline hover:text-black duration-700 transition ease-in-out'}
                            href="https://becode.org/fr/" target="_blank">BECODE Brussels
                        </a> <br/>
                        web developer trainee <br/>
                    </p>
                </div>
                <Image
                    className={'mt-20 mx-5 transition hover:-translate-x-6 ease-in-out duration-700 max-lg:hidden rounded-2xl scale-50'}
                    src={'/assets/images/portrait2.webp'}
                    alt={'portrait of Sola Kabuta sitting in a chair'}
                    width={'3456'}
                    height={'4608'}/>

            </div>
        </section>
    );
};
