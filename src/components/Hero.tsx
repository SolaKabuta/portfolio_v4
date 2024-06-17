import Image from "next/image";
import portrait2 from '../../public/portrait2.jpg'

export const Hero = () => {
    return (
        <section>
            {/* IMAGES */}
            <main className={'flex justify-between place-items-center py-56'}>
                <div className={'box'}>
                    <Image
                        className={'img'}
                        src={'/portrait1.jpg'}
                        alt={'portrait of Sola'}
                        width={'400'}
                        height={'900'}/>
                </div>
                <div className={'box box_middle'}>
                    <Image
                        className={'img'}
                        src={portrait2}
                        alt={'portrait of Sola'}
                        />
                </div>
                <div className={'box'}>
                    <Image
                        className={'img'}
                        src={'/portrait3.jpg'}
                        alt={'portrait of Sola'}
                        width={'400'}
                        height={'900'}/>
                </div>
            </main>
            {/* TEXTS */}
            <div className={'flex justify-between place-items-end py-20'}>
                <p className={'font-black text-7xl'}>
                    WEB DEVELOPER <br/>
                    & WEB DESIGNER. <br/>
                    <span className={'text-xl font-light'}>(+ LAZY PHOTOGRAPHER )</span>
                </p>
                <p className={'text-right'}>
                    Each pixel holds a story, <br/>
                    each line of code a puzzle begging to be solved. <br/>
                    I'm a developer who sees design as the brushstroke, <br/>
                    and a designer who finds elegance in the logic. <br/>
                    Come explore my creations, <br/>
                    and let's build something amazing together.
                </p>
            </div>
        </section>
    );
};