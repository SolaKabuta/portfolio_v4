"use client";
import { useEffect } from 'react';
import Image from "next/image";
import React from "react";
import { cva, type VariantProps} from "class-variance-authority";
import {LinkedInLogoIcon, GitHubLogoIcon} from "@radix-ui/react-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';


// TEST CVA
const textAnim = cva (
    "hover:text-third_color duration-700 transition ease-in-out",
{
    variants: {
        intent: {
            primary: "text-xl font-light"
        },
    }
}
)

// TEST
const style = {
    img : 'hover:scale-110 duration-700 ease-in-out transition',
    img_center : 'hover:scale-110 duration-700 ease-in-out transition pt-10',
    txt: 'hover:text-third_color duration-700 transition ease-in-out',
    txt2: 'font-light text-sm hover:text-third_color duration-700 transition ease-in-out pb-2',
    socials: 'scale-150 hover:text-black duration-700 transition ease-in-out',
}



const images = [
    {
        className: style.img,
        src: '/assets/images/portrait1_web.jpg',
        alt: 'portrait of Sola',

    },
    {
        className: style.img_center,
        src: '/assets/images/portrait2_web.jpg',
        alt: 'portrait of Sola',
    },
    {
        className: style.img,
        src: '/assets/images/portrait3_web.jpg',
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
                <div data-aos="fade-zoom-in"
                     data-aos-easing="linear"
                     data-aos-duration="1000"
                     className={"max-lg:hidden flex justify-between place-items-center"}>
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            className={image.className}
                            src={image.src}
                            alt={image.alt}
                            width={400}
                            height={900}
                            priority={index === 0}
                        />
                    ))}
                </div>
                    <div
                        data-aos="fade-zoom-in"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                        className={'lg:hidden grid place-items-center'}>
                        <Image
                            src={images[1].src}
                            alt={images[1].alt}
                            width={600}
                            height={900}
                            loading={'lazy'}
                            /*priority={true}*//>
                    </div>
            {/* TEXTS */}
            <div className={'max-lg:grid place-items-center flex justify-between items-start pt-20 py-5'}>
                <p data-aos="fade-zoom-in"
                   data-aos-easing="ease-in-sine"
                   data-aos-duration="1200"
                   className={'font-black sm:text-3xl lg:text-7xl transition hover:translate-x-6 ease-in-out duration-700'}>
                    {/*TEST CVA*/}
                    <span className={(textAnim({}))}>WEB</span> <span className={style.txt}>DEVELOPER</span> <br/>
                    <span className={style.txt}>&</span> <span className={style.txt}>WEB</span> <span
                    className={style.txt}>DESIGNER.</span> <br/>
                </p>
                <p  data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1200"
                    className={'text-right transition hover:-translate-x-6 ease-in-out duration-700'}>
                    <span className={style.txt}>Each pixel holds a story,</span> <br/>
                    <span className={style.txt}>each line of code a puzzle begging to be solved.</span> <br/>
                    <span className={style.txt}>I&#39;m a developer who sees design as the brushstroke,</span> <br/>
                    <span className={style.txt}>and a designer who finds elegance in the logic.</span> <br/>
                    <span className={style.txt}>Come explore <span className={'underline font-bold hover:text-black duration-700 transition ease-in-out'}><a href="#work">my work</a></span>,</span>
                    <br/>
                    <span className={style.txt}>and let&#39;s build something amazing together.</span>
                </p>
            </div>
            <div className={'flex justify-between gap-4'}>
                <p data-aos="fade-zoom-in"
                   data-aos-easing="ease-in-sine"
                   data-aos-duration="2000" id={'hand_subtitle'}>(+ LAZY PHOTOGRAPHER )</p>
                <div data-aos="fade-zoom-in"
                     data-aos-easing="ease-in-sine"
                     data-aos-duration="2000" className={'flex justify-end gap-5'}>
                    <a href="https://www.linkedin.com/in/sola-kabuta/"
                       target={'_blank'}>
                        <LinkedInLogoIcon className={style.socials}/>
                    </a>
                    <a href="https://github.com/SolaKabuta"
                       target={'_blank'}>
                        <GitHubLogoIcon className={style.socials}/>
                    </a>
                </div>
            </div>
        </section>
    );
};