import {Header} from "@/components/Header";

export default function MorePlayground () {
    return <>
        <Header/>
        <div className={''}>
            <p className={'absolute z-50 text-7xl backdrop-blur font-black grid place-items-center left-0 right-0 h-screen transition hover:-translate-x-6 ease-in-out duration-700'}>
                Coming soon
            </p>
            <div className="spinner absolute z-50 bottom-[40%]">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </>
}