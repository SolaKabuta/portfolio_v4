import {Header} from "@/components/Header";
import Image from "next/image";


export default function martine () {
    return <>
        <section className={'text-main_color'}>
                <Header/>
            <Image
                className={'-z-20'}
                src={'/martine_macbook.jpg'}
                alt={'cabinet coppens macbook mockup'}
                loading={"lazy"}
                style={{
                    objectFit: 'cover',
                }}
                fill={true}/>
            <div>
                <p className={`text-7xl font-black transition hover:translate-x-6 ease-in-out duration-700 pb-[550px]`}>
                    Martine <br/>
                    Henderyckx
                </p>
                <p>
                    web integration <br/>
                    web development
                </p>
            </div>
        </section>
    </>
}