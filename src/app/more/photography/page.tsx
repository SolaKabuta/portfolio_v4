import {Header} from "@/components/Header";

export default function MorePhotography () {
    return <>
        <Header/>
        <section className={'py-56'}>
            <p className={'font-bold text-6xl'}>Leo.</p>
            <p className={'py-5'}>Art direction / Photography </p>
            <div className={'flex justify-between'}>
                <div className={'box'}></div>
                <div className={'box'}></div>
                <div className={'box'}></div>
            </div>

            <div className={'h-screen z-50'}>
                <p className={'absolute text-7xl font-black backdrop-blur h-screen transition hover:-translate-x-6 ease-in-out duration-700'}>
                    Coming soon
                </p>
                <div className="spinner absolute z-50 mt-44">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

        </section>
    </>
}