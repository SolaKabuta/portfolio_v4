import { ArrowTopRightIcon, HeartFilledIcon } from '@radix-ui/react-icons'
import Image from "next/image";

const style = {
    icons: "flex items-center hover:text-main duration-700 transition ease-in-out",
    // arrows: "hover:-translate-y-2 transition duration-300 ease-in-out",
    links: "duration-700 transition ease-in-out hover:rotate-3 hover:scale-105",
}

export const Footer = () => {
    return (
        <footer className={'bg-black w-full h-max text-white'}>
            <section>
                <div className={'flex justify-between pb-10'}>
                    <div>
                        <p >Sola Kabuta</p>
                        <a className={'transition duration-300 hover:text-main ease-in-out'} href="">solakabuta@gmail.com</a>
                        <p>Brussels, Belgium</p>
                    </div>
                    <div>
                        <Image className={'invert'} src={'/assets/icons/logo_original.svg'} alt={'Sola Kabuta logo'} width={50} height={50}/>
                    </div>
                    <div>
                        <ul className={''}>
                        <li className={style.links}>
                            <a
                                className={style.icons}
                                href="https://www.linkedin.com/in/sola-kabuta/"
                                target={'_blank'}>
                                Linkedin <ArrowTopRightIcon/>
                            </a>
                        </li>
                        <li className={style.links}>
                            <a
                                className={style.icons}
                                href="https://github.com/SolaKabuta"
                                target={'_blank'}>
                                github <ArrowTopRightIcon/>
                            </a>
                        </li>
                        <li className={style.links}>
                            <a
                                className={style.icons}
                                href="/assets/images/CV_Dev.pdf"
                                target={'_blank'}>
                                CV <ArrowTopRightIcon/>
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
                <h5 className={'flex justify-between font-black max-md:text-4xl text-12xl'}>
                     <span>C</span><span>o</span><span>n</span><span>n</span><span>e</span><span>c</span><span>t</span></h5>
                {/* Copyrights */}
                <div className={'flex justify-between items-center text-main_color py-5 text-xs bg-black'}>
                    <a href="#">© Copyright - sola kabuta - 2024</a>
                    <p className={'max-lg:hidden'}>LAST UPDATE august 2024</p>
                    <p className={'flex gap-2'}>made with love <HeartFilledIcon/> </p>
                </div>
            </section>
        </footer>
    );
};
