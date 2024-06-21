import { ArrowTopRightIcon } from '@radix-ui/react-icons'

const style = {
    icons: "flex items-center",
}

export const Footer = () => {
    return (
        <footer className={'bg-second_color w-full h-[370px] sticky right-0 left-0 -bottom-full'}>
            <section>
                <div className={'flex justify-between items-center pt-44 text-main_color'}>
                    <h5 className={'font-black text-6xl text_anim'}>Get in touch.</h5>
                    <ul className={'flex gap-10'}>
                        <li><a className={style.icons} href="mailto:solakabuta@gmail.com" target={'_blank'}>email <ArrowTopRightIcon/></a></li>
                        <li><a className={style.icons} href="https://www.linkedin.com/in/sola-kabuta/" target={'_blank'}>Linkedin <ArrowTopRightIcon/></a></li>
                        <li><a className={style.icons} href="https://github.com/SolaKabuta" target={'_blank'}>github <ArrowTopRightIcon/></a></li>
                    </ul>
                </div>
            </section>
            {/*  DIVIDER  */}
            <div className={'bg-main_color h-1 w-full mt-14'}></div>
            <section>
                <div className={'flex justify-between text-main_color py-5 text-xs'}>
                    <a href="#">© 2024 sola kabuta portfolio All Rights Reserved.</a>
                    <p>LAST UPDATE on JUNE 2024</p>
                    <p>DESIGNED & DEVELOPED BY sola kabuta</p>
                </div>
            </section>
        </footer>
    );
};