import React, {useState} from 'react';
import Link from "next/link";
import Image from "next/image";

const SidebarMenu = () => {
    const [open, Setopen] = useState(false)
    const [close, Setclose] = useState(false)
    return (
        <>
            <div className={'bg-black opacity-50'}>
                <ul className={'text-7xl'}>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'#work'}>Work</Link></li>
                    <li><Link href={'#about'}>About</Link></li>
                    <li><Link href={'#contact'}>Contact</Link></li>
                </ul>
                {/*<button onClick={() => Setopen(true)}>Menu</button>*/}
                <button className={'max-md:hidden'} onClick={() => Setopen(true)}><Image src={'assets/icons/ui/burger.svg'} alt={'burger menu icon'} width={50} height={50}/></button>
                <button className={'max-md:hidden'} onClick={() => Setclose(true)}><Image src={'assets/icons/ui/close.svg'} alt={'close menu icon'} width={50} height={50}/></button>
            </div>
        </>
    );
};

export default SidebarMenu;