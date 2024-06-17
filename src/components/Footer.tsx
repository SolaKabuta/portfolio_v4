
export const Footer = () => {
    return (
        <footer className={'bg-second_color w-full h-[370px] sticky right-0 left-0 -bottom-full'}>
            <section>
                <div className={'flex justify-between items-center pt-44 text-main_color'}>
                    <h5 className={'font-black text-6xl'}>Get in touch</h5>
                    <ul className={'flex gap-10'}>
                        <li><a href="mailto:solakabuta@gmail.com" target={'_blank'}>email</a></li>
                        <li><a href="https://www.linkedin.com/in/sola-kabuta/" target={'_blank'}>Linkedin</a></li>
                        <li><a href="https://github.com/SolaKabuta" target={'_blank'}>github</a></li>
                    </ul>
                </div>
            </section>
            {/*  DIVIDER  */}
            <div className={'bg-main_color h-1 w-full mt-14'}></div>
            <section>
                <div className={'flex justify-between text-main_color py-5'}>
                    <p>sola kabuta portfolio</p>
                    <p>LAST UPDATE on JUNE 2024</p>
                    <p>DESIGNED & DEVELOPED BY sola kabuta</p>
                </div>
            </section>
        </footer>
    );
};