import Image from "next/image";
import portrait2 from '../../public/portrait2.jpg'

export const About = () => {
    return (
        <section>
            <div className={'flex justify-between items-end pt-20'}>

                <div className={''}>
                    <h3
                        id={'about'}
                        className={'font-black text-7xl py-20 text_anim transition hover:translate-x-6 ease-in-out duration-700'}>
                        About <span className={'text_anim'}>me.</span>
                    </h3>
                    <p className={'py-20 w-[500px] transition hover:translate-x-6 ease-in-out duration-700 text-justify'}>
                        <span className={'py-10'}>My name is Sola</span> <br/><br/>
                        <span className={'text-third_color font-bold hover:text-red-600 transition duration-300 ease-in-out'}>(pronounced « <span className={'duration-300 transition ease-in-out'}>sho . la</span> »)</span> <br/> <br/>

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

                    {/* EXPERIENCE */}
                    <p className={'py-5'}>
                        experience :
                    </p>
                    <p className={'py-10 transition hover:translate-x-6 ease-in-out duration-700'}>
                        from february to april 2024 <br/>
                        <a
                            className={'font-bold underline'}
                            href="https://mobilstudio.be/" target="_blank">Mobil studio
                        </a> <br/>
                        web developer intern <br/>
                    </p>
                    <p className={'py-10 transition hover:translate-x-6 ease-in-out duration-700'}>
                        from august 2023 to april 2024 <br/>
                        <a
                            className={'font-bold underline'}
                            href="https://becode.org/fr/" target="_blank">BECODE BRussels
                        </a> <br/>
                        web developer trainee <br/>
                    </p>
                </div>
                <Image
                    className={'scale-110 py-20 px-5 transition hover:-translate-x-6 ease-in-out duration-700'}
                    src={'/portrait2_web.jpg'}
                    alt={'portrait of Sola Kabuta smiling in a chair'}
                    width={'600'}
                    height={'900'}/>

            </div>
        </section>
    );
};
