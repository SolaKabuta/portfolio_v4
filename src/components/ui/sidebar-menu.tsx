import React, {useState} from 'react';
import Link from "next/link";
import Image from "next/image";

const SidebarMenu = () => {
    const [open, Setopen] = useState(false)
    const [close, Setclose] = useState(false)
    return (
        <>
            <div className={'absolute z-50 bg-black w-max h-screen right-0 top-0'}>
                <button className={'max-lg:hidden'} onClick={() => Setclose(true)}><Image src={'/assets/icons/ui/close.svg'} alt={'close menu icon'} width={50} height={50}/></button>
                <ul className={'text-7xl'}>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'#work'}>Work</Link></li>
                    <li><Link href={'#about'}>About</Link></li>
                    <li><Link href={'#contact'}>Contact</Link></li>
                </ul>
                {/*<button onClick={() => Setopen(true)}>Menu</button>*/}
                <button className={'max-lg:hidden'} onClick={() => Setopen(true)}><Image src={'/assets/icons/ui/burger.svg'} alt={'burger menu icon'} width={50} height={50}/></button>
            </div>
        </>
    );
};

export default SidebarMenu;