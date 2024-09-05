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
                <div className={'flex justify-between max-md:grid max-md:place-content-center pb-10'}>
                    <div className={'max-md:hidden'}>
                        <p >Sola Kabuta</p>
                        <a className={'transition duration-300 hover:text-main ease-in-out'} href="">solakabuta@gmail.com</a>
                        <p>Brussels, Belgium</p>
                    </div>
                    <div className={'max-md:pb-8 max-md:hidden'}>
                        <a href="/"><Image className={'invert max-md:pb-3'} src={'/assets/icons/logo_original.svg'} alt={'Sola Kabuta logo'} width={50} height={50}/></a>
                    </div>
                    <div className={''}>
                        <ul className={'max-md:flex max-md:gap-24'}>
                            <div>
                                <li className={'md:hidden'}>
                                    <a
                                        className={style.icons}
                                        href="mailto:solakabuta@gmail.com"
                                        target={'_blank'}>
                                        Mail <ArrowTopRightIcon/>
                                    </a>
                                </li>
                                <li className={style.links}>
                                    <a
                                        className={style.icons}
                                        href="https://www.linkedin.com/in/sola-kabuta/"
                                        target={'_blank'}>
                                        Linkedin <ArrowTopRightIcon/>
                                    </a>
                                </li>
                            </div>
                            <div className={'max-md:text-right'}>
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
                            </div>
                        </ul>
                    </div>
                </div>
                <div className={'max-md:grid place-content-center'}>
                    <div className={'max-md:flex items-center align-bottom gap-4 '}>
                        <h5 className={'flex justify-between font-black max-lg:text-4xl text-12xl'}>
                            <span>C</span><span>o</span><span>n</span><span>n</span><span>e</span><span>c</span><span>t</span>
                        </h5>
                        <div className={'md:hidden'}>
                            <a href="/"><Image className={'invert transition duration-700 hover:rotate-6'} src={'/assets/icons/logo_original.svg'}
                                               alt={'Sola Kabuta logo'} width={50} height={50}/></a>
                        </div>
                    </div>
                    {/* Copyrights */}
                    <div className={'flex justify-between items-center text-main_color py-5 text-xs bg-black'}>
                        <a href="#">© Copyright - sola kabuta - 2024</a>
                        <p className={'max-lg:hidden max-md:hidden'}>LAST UPDATE september 2024</p>
                        <p className={'flex gap-2 max-md:hidden'}>made with <span
                            className={'animate-bounce'}><HeartFilledIcon/></span></p>
                    </div>
                </div>
            </section>
        </footer>
    );
};
