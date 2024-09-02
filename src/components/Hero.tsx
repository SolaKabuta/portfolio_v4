"use client";
import { useEffect } from 'react';
import Image from "next/image";
import React from "react";
import { cva} from "class-variance-authority";
import {LinkedInLogoIcon, GitHubLogoIcon} from "@radix-ui/react-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
import WordRotate from "@/components/magicui/word-rotate";



// TEST CVA
const textAnim = cva (
    "hover:text-black duration-700 transition ease-in-out",
{
    variants: {
        intent: {
            primary: "text-xl font-light"
        },
    }
}
)

// TEST CLEANER STYLE
const style = {
    img : 'hover:scale-110 duration-700 ease-in-out transition w-[400px] h-auto rounded-2xl',
    img_center : 'hover:scale-110 duration-700 ease-in-out transition mt-10 w-[400px] h-auto rounded-2xl',
    txt: 'hover:text-black duration-700 transition ease-in-out',
    txt2: 'font-light text-sm hover:text-third_color duration-700 transition ease-in-out pb-2',
    socials: 'scale-150 hover:text-black duration-700 transition ease-in-out',
}



const images = [
    {
        className: style.img,
        src: '/assets/images/portrait1.webp',
        alt: 'portrait of Sola',

    },
    {
        className: style.img_center,
        src: '/assets/images/portrait2.webp',
        alt: 'portrait of Sola',
    },
    {
        className: style.img,
        src: '/assets/images/portrait3.webp',
        alt: 'portrait of Sola',
    },
];

export const Hero = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section>
            {/* IMAGES */}
                <div
                    id = 'Home'
                    data-aos="fade-zoom-in"
                     data-aos-easing="linear"
                     data-aos-duration="1000"
                     className={"max-lg:hidden flex justify-between place-items-center"}>
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            className={image.className}
                            src={image.src}
                            alt={image.alt}
                            width={0}
                            height={0}
                            priority
                        />
                    ))}
                </div>
                    {/* MOBILE IMAGE */}
                    <div
                        data-aos="fade-zoom-in"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                        className={'lg:hidden grid place-items-center pt-10'}>
                        <Image
                            className={'rounded-2xl'}
                            src={images[1].src}
                            alt={images[1].alt}
                            width={600}
                            height={900}
                            priority
                        />
                    </div>
            {/* TEXTS */}
            <div className={'max-lg:grid  justify-between items-start pt-20 py-5 align-text-bottom'}>
                <div>
                    <h1 data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1200"
                        className={'font-black max-md:text-4xl text-7xl transition hover:translate-x-6 ease-in-out duration-700'}>
                        {/*TEST CVA*/}
                        <WordRotate className="text-4xl max-md:text-4xl font-bold text-black dark:text-white" words={[`Hello, I am Sola`, `but my friends call me "Kam"`]}/>
                        <span className={(textAnim({}))}>Front</span><span className={style.txt}>-</span><span
                        className={style.txt}>End</span> <span className={style.txt}>DEVELOPER</span> <br/>
                        <span className={style.txt}>&</span> <span className={style.txt}>WEB</span> <span
                        className={style.txt}>DESIGNER.</span> <br/>
                    </h1>
                </div>
                <p data-aos="fade-zoom-in"
                   data-aos-easing="ease-in-sine"
                   data-aos-duration="1200"
                   className={'text-right transition hover:-translate-x-6 ease-in-out duration-700 max-md:text-sm max-lg:text-start max-lg:pt-10 text-balance'}>
                    <span className={style.txt}>Each pixel holds a story,</span> <br/>
                    <span className={style.txt}>each line of code a puzzle begging to be solved.</span> <br/>
                    <span className={style.txt}>I&#39;m a developer who sees design as the brushstroke,</span> <br/>
                    <span className={style.txt}>and a designer who finds elegance in the logic.</span> <br/>
                    <span className={style.txt}>Come explore <span
                        className={'underline font-bold hover:text-black duration-700 transition ease-in-out'}><a
                        href="#work">my work</a></span>,</span>
                    <br/>
                    <span className={style.txt}>and let&#39;s build something amazing together.</span>
                </p>
            </div>
                {/*ICONS*/}
                <div data-aos="fade-zoom-in"
                     data-aos-easing="ease-in-sine"
                     data-aos-duration="2000" className={'flex justify-end max-md:justify-start gap-5'}>
                    <a href="https://www.linkedin.com/in/sola-kabuta/"
                       target={'_blank'}>
                        <LinkedInLogoIcon className={style.socials}/>
                    </a>
                    <a href="https://github.com/SolaKabuta"
                       target={'_blank'}>
                        <GitHubLogoIcon className={style.socials}/>
                    </a>
                </div>
        </section>
    );
};