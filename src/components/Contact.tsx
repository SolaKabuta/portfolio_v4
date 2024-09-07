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
                <div
                    className="absolute z-50 inset-y-0 left-0 w-1/3 bg-gradient-to-r from-second dark:from-background"></div>
                <div
                    className="absolute z-50 inset-y-0 right-0 w-1/3 bg-gradient-to-l from-second dark:from-background"></div>
            </div>
        </section>
    );
};