"use client";

import Image from "next/image";
import Link from "next/link";
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons'
import { useState, useRef, useEffect } from "react";
import sidebarMenu from "@/components/ui/sidebar-menu";
import SidebarMenu from "@/components/ui/sidebar-menu";

interface nav {
  title: string;
  slug: string;
}

const navItem: nav[] = [
  {
    title: "Home",
    slug: "/",
  },
  {
    title: "Work",
    slug: "#work",
  },
  {
    title: "About",
    slug: "#about",
  },
  {
    title: "Contact",
    slug: "#contact",
  },
];

const icons = [
  {
    src: "/assets/icons/ui/burger_menu.svg"
  },
  {
    src: "/assets/icons/ui/close.svg"
  },
]

export const Header2 = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const navRef = useRef<HTMLDivElement>(null);

  // Close the navigation when you click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive]);

  return (
    <header ref={navRef}>
      <section data-aos="fade-zoom-in"
               data-aos-easing="ease-in-sine"
               data-aos-duration="1500"
               data-aos-anchor-placement="bottom-bottom"
               className="py-5 flex justify-between">
        <Link href="/" className="flex gap-2 items-center">
          <h1 className="transition hover:translate-x-3 ease-in-out duration-700">
            Sola <span className={"max-lg:hidden"}>Kabuta</span>
          </h1>
        </Link>
        <Link href={'/'}>
          <Image
              className={'h-auto w-[30px]'}
              src="/assets/icons/logo_original.svg"
              alt="Sola Kabuta logo"
              width={0}
              height={0}
          />
        </Link>
        <button className={'uppercase'}
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <span className={'max-lg:hidden'}>Menu</span>
          <HamburgerMenuIcon className={'scale-125 lg:hidden'}/>
        </button>
      </section>

      {isActive ? (
        <div className="z-50 fixed w-[600px]  bg-black/80 inset-y-0 right-0 h-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm">
          <button className={'pl-[80%]'} onClick={() => setIsActive(!isActive)}>
            <Cross1Icon className={'scale-125'}/>
          </button>
          <ul className={'py-20 uppercase font-black text-7xl text-center'}>
            {navItem.map((item) => (
              <li className={'py-5'} key={item.slug}>
                <Link href={item.slug}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
};
