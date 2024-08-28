
// TEST
const style = {
    txt: 'hover:text-black duration-700 transition ease-in-out',
}

export const Contact = () => {
    return (
        <section className={'relative'}>
            <h4
                id={'contact'}
                className={'font-black max-md:text-4xl text-7xl max-md:py-20 max-md:pt-36 max-lg:text-start py-44 pt-80 text-center transition hover:-translate-x-6 ease-in-out duration-700'}>
                <span className={style.txt}>Let's</span> <span className={style.txt}>build</span> <br/>
                <span className={style.txt}>together.</span>
            </h4>
            <a
                className={'font-black max-md:text-xl max-lg:text-4xl text-6xl max-md:my-10 my-44 grid place-items-center max-lg:place-items-start text_anim transition hover:-translate-x-3 ease-in-out duration-700'}
                href="mailto:solakabuta@gmail.com"><span className={style.txt}>solakabuta@gmail.com</span>
            </a>
        </section>
    );
};