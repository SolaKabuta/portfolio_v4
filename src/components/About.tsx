import Image from "next/image";
import portrait2 from '../../public/portrait2.jpg'

export const About = () => {
    return (
        <section>
            <div className={'flex justify-between gap-20 pt-44'}>

                <div className={''}>
                    <h3 className={'font-black text-7xl py-20'}>
                        About me.
                    </h3>
                    <p className={'py-20'}>
                        <span className={'py-10'}>My name is Sola</span> <br/><br/>
                        <span className={'text-third_color font-bold'}>(pronounced « sho . la »)</span> <br/> <br/>

                        I Am a web developer based in bruxelles belgium. <br/>
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
                    <p className={'py-5'}>
                        experience :
                    </p>
                    <p className={'py-10'}>
                        from february to april 2024 <br/>
                        <a
                            className={'font-bold underline'}
                            href="https://mobilstudio.be/" target="_blank">Mobil studio
                        </a> <br/>
                        web developer intern <br/>
                    </p>
                    <p className={'py-10'}>
                        from august 2023 to april 2024 <br/>
                        <a
                            className={'font-bold underline'}
                            href="https://becode.org/fr/" target="_blank">BECODE BRussels
                        </a> <br/>
                        web developer trainee <br/>
                    </p>
                </div>
                <Image
                    className={'scale-50'}
                    src={portrait2}
                    alt={'portrait of Sola Kabuta smiling in a chair'}/>

            </div>
        </section>
    );
};
