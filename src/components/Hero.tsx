import Image from "next/image";

export const Hero = () => {
    return (
        <section>
            {/* IMAGES */}
            <main className={'flex justify-between place-items-center py-56'}>
                    <Image
                        className={'img'}
                        src={'/portrait1.jpg'}
                        alt={'portrait of Sola'}
                        width={'400'}
                        height={'900'}/>
                <div className={'box box_middle'}>
                    <Image
                        className={'img'}
                        src={'/portrait2.jpg'}
                        alt={'portrait of Sola'}
                        width={'400'}
                        height={'900'}/>
                </div>
                    <Image
                        className={'img'}
                        src={'/portrait3.jpg'}
                        alt={'portrait of Sola'}
                        width={'400'}
                        height={'900'}/>
            </main>
            {/* TEXTS */}
            <div className={'flex justify-between place-items-end py-20 '}>
                <p className={'font-black text-7xl transition hover:-translate-x-6 ease-in-out duration-700'}>
                    <span className={'text_anim'}>WEB</span> <span className={'text_anim'}>DEVELOPER</span> <br/>
                    <span className={'text_anim'}>&</span> <span className={'text_anim'}>WEB</span> <span className={'text_anim'}>DESIGNER.</span> <br/>
                    <span className={'text-xl font-light text_anim  leading-10'}>(+ LAZY PHOTOGRAPHER )</span>
                </p>
                <p className={'text-right transition hover:translate-x-6 ease-in-out duration-700'}>
                    <span className={'text_anim'}>Each pixel holds a story,</span> <br/>
                    <span className={'text_anim'}>each line of code a puzzle begging to be solved.</span> <br/>
                    <span className={'text_anim'}>I&apos;m a developer who sees design as the brushstroke,</span> <br/>
                    <span className={'text_anim'}>and a designer who finds elegance in the logic.</span> <br/>
                    <span className={'text_anim'}>Come explore my creations,</span> <br/>
                    <span className={'text_anim'}>and let&apos;s build something amazing together.</span>
                </p>
            </div>
        </section>
    );
};