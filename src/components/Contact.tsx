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
        </section>
    );
};