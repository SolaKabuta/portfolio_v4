
export default function MorePlayground () {
    return <>
        <div className={'h-screen w-screen grid place-items-center absolute z-50'}>
            <p className={'text-7xl font-black text-main_color transition hover:-translate-x-6 ease-in-out duration-700 z-50'}>
                Coming soon
            </p>
            <div className={'backdrop-blur-sm h-max w-screen absolute'}>

            </div>
            {/* LOADER */}
            <div className="spinner absolute z-50 mt-14">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <section className={'max-xl:py-56'}>
                <video
                    autoPlay
                    loop
                    src="/assets/videos/Pays.mp4">
                </video>
        </section>
    </>
}