import { ArrowTopRightIcon } from '@radix-ui/react-icons'

const style = {
    icons: "flex items-center hover:text-black duration-700 transition ease-in-out",
    // arrows: "hover:-translate-y-2 transition duration-300 ease-in-out",
    links: "duration-700 transition ease-in-out hover:rotate-3 hover:scale-110",
}

export const Footer = () => {
    return (
        <footer className={'bg-second_color w-full h-[370px] sticky right-0 left-0'}>
            <section>
                <div className={'flex justify-between items-center pt-44 text-main_color'}>
                    <h5 className={'font-black max-md:text-4xl text-7xl hover:text-black duration-700 transition ease-in-out hover:rotate-3'}>Get in touch.</h5>
                    <ul className={'flex items-center gap-2 max-md:grid max-md:place-items-end'}>
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
                                href="mailto:solakabuta@gmail.com"
                                target={'_blank'}>
                                email <ArrowTopRightIcon/>
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
                    </ul>
                </div>
            </section>
            {/*  DIVIDER  */}
            <div className={'bg-main_color h-1 w-full mt-14'}></div>
            {/* Copyrights */}
            <div className={'flex justify-between text-main_color py-5 px-20 max-md:px-8 text-xs bg-second_color'}>
                    <a href="#">© 2024 sola kabuta portfolio All Rights Reserved.</a>
                    <p className={'max-lg:hidden'}>LAST UPDATE on august 2024</p>
                    <p className={'text-end'}>DESIGNED & DEVELOPED BY sola kabuta.</p>
            </div>
        </footer>
    );
};