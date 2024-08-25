import Image from "next/image";
import React from "react";
import { cva, type VariantProps} from "class-variance-authority";
import {LinkedInLogoIcon, GitHubLogoIcon} from "@radix-ui/react-icons";

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
    return (
        <section>
            {/* IMAGES */}
                <div className={"flex justify-between place-items-center"}>
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            className={image.className}
                            src={image.src}
                            alt={image.alt}
                            width={400}
                            height={900}
                            loading={'lazy'}
                        />
                    ))}
                </div>
            {/* TEXTS */}
            <div className={'flex justify-between items-start pt-20 py-5 '}>
                <p className={'font-black text-7xl transition hover:translate-x-6 ease-in-out duration-700'}>
                    {/*TEST CVA*/}
                    <span className={(textAnim({}))}>WEB</span> <span className={style.txt}>DEVELOPER</span> <br/>
                    <span className={style.txt}>&</span> <span className={style.txt}>WEB</span> <span
                    className={style.txt}>DESIGNER.</span> <br/>
                </p>
                <p className={'text-right transition hover:-translate-x-6 ease-in-out duration-700'}>
                    <span className={style.txt}>Each pixel holds a story,</span> <br/>
                    <span className={style.txt}>each line of code a puzzle begging to be solved.</span> <br/>
                    <span className={style.txt}>I&#39;m a developer who sees design as the brushstroke,</span> <br/>
                    <span className={style.txt}>and a designer who finds elegance in the logic.</span> <br/>
                    <span className={style.txt}>Come explore <span className={'underline font-bold'}><a href="#work">my work</a></span>,</span>
                    <br/>
                    <span className={style.txt}>and let&#39;s build something amazing together.</span>
                </p>
            </div>
                <p id={'hand_subtitle'} className={style.txt2}>(+ LAZY PHOTOGRAPHER )</p>
            <div className={'flex justify-end gap-4'}>
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