import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

// TEST
const style = {
    txt: 'hover:text-black duration-700 transition ease-in-out',
}

export const Contact = () => {
    return (
        <section id={'contact'} className={'relative z-30'}>
            <div className={`py-20`}>
                <VelocityScroll
                    text="Let's build together."
                    default_velocity={5}
                    className="font-display text-center max-md:text-4xl text-7xl font-black tracking-[-0.02em] text-main drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
                />
            </div>
            {/*<a*/}
            {/*    className={'font-black max-md:text-xl max-lg:text-4xl text-6xl max-md:my-10 my-44 grid place-items-center max-lg:place-items-start text_anim transition hover:-translate-x-3 ease-in-out duration-700'}*/}
            {/*    href="mailto:solakabuta@gmail.com"><span className={style.txt}>solakabuta@gmail.com</span>*/}
            {/*</a>*/}
        </section>
    );
};