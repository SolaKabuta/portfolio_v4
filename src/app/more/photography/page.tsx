import {Header} from "@/components/Header";

export default function MorePhotography () {
    return <>
        <Header/>
        <div className={'h-screen w-screen grid place-items-center absolute z-50'}>
            <p className={'text-7xl font-black transition hover:-translate-x-6 ease-in-out duration-700 z-50'}>
                Coming soon
            </p>
            <div className={'backdrop-blur h-screen w-screen absolute'}>

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
        <section className={'py-56'}>
            <p className={'font-bold text-6xl'}>Leo.</p>
            <p className={'py-5'}>Art direction / Photography </p>
            <div className={'flex justify-between'}>
                <div className={'box'}></div>
                <div className={'box'}></div>
                <div className={'box'}></div>
            </div>
        </section>
    </>
}