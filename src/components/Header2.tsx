"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

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
      <section className="py-10 flex justify-between bg-transparent">
        <Link href="/" className="flex gap-2 items-center">
          <h1 className="transition hover:translate-x-3 ease-in-out duration-700">
            Sola Kabuta
          </h1>
          <Image
            src="/assets/icons/logo_original.svg"
            alt="Sola Kabuta logo"
            width={30}
            height={30}
          />
        </Link>
        <button className={'uppercase'}
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          Menu
        </button>
      </section>

      {isActive ? (
        <div className="z-50 fixed bg-black/80 inset-y-0 right-0 h-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm">
          <button onClick={() => setIsActive(!isActive)}>Close</button>
          <ul>
            {navItem.map((item) => (
              <li key={item.slug}>
                <Link href={item.slug}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
};
