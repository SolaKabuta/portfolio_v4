import {Header} from "@/components/Header";

export default function MorePlayground2 () {
    return <div>
        <Header/>
        <p className={'absolute z-50 text-7xl backdrop-blur font-black grid place-items-center left-0 right-0 h-screen transition hover:-translate-x-6 ease-in-out duration-700'}>Coming soon</p>
        <section className={'py-56'}>
            <div className={'flex justify-between'}>
                <div className={'box'}></div>
                <div className={'box'}></div>
                <div className={'box'}></div>
            </div>
        </section>
    </div>
}