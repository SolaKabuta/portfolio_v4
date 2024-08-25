
export const Contact = () => {
    return (
        <section className={'relative'}>
            <h4
                id={'contact'}
                className={'font-black text-7xl py-44 pt-80 text-center transition hover:-translate-x-6 ease-in-out duration-700'}>
                <span>Let's</span> <span>build</span> <br/>
                <span>together.</span>
            </h4>
            <a
                className={'font-black text-6xl my-44 grid place-items-center text_anim transition hover:-translate-x-3 ease-in-out duration-700'}
                href="mailto:solakabuta@gmail.com">solakabuta@gmail.com
            </a>
        </section>
    );
};