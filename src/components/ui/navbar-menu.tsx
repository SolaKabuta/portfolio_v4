"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
                             setActive,
                             active,
                             item,
                             children,
                         }: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    children?: React.ReactNode;
}) => {
    return (
        <div onMouseEnter={() => setActive(item)} className="relative">
            <motion.p
                transition={{ duration: 0.3 }}
                className="cursor-pointer text-white hover:text-main transition duration-300 ease-in-out hover:opacity-[0.9] dark:text-white" //NAVBAR TEXTS
            >
                {item}
            </motion.p>
            {active !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}
                >
                    {active === item && (
                        <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
                            <motion.div
                                transition={transition}
                                layoutId="active" // layoutId ensures smooth animation
                                className="bg-black dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl" //MENU Items class settings
                            >
                                <motion.div
                                    layout // layout ensures smooth animation
                                    className="w-max h-full p-4"
                                >
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

//NAVBAR class settings
export const Menu = ({
                         setActive,
                         children,
                     }: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)} // resets the state
            className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-black opacity-90 shadow-input flex justify-evenly space-x-4 px-8 py-6 place-items-center" //NAVBAR spacing
        >
            {children}
        </nav>
    );
};

export const ProductItem = ({
                                title,
                                description,
                                href,
                                src,
                            }: {
    title: string;
    description: string;
    href: string;
    src: string;
}) => {
    return (
        <Link href={href} className="flex space-x-2">
            <Image
                src={src}
                width={140}
                height={70}
                alt={title}
                className="flex-shrink-0 rounded-md shadow-2xl"
            />
            <div>
                <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
                    {title}
                </h4>
                {/* NAVBAR: WORK Items*/}
                <p className="text-white text-sm max-w-[10rem] transition duration-300  hover:text-main ease-in-out">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export const HoveredLink = ({ children, ...rest }: any) => {
    return (
        <Link
            {...rest}
            className="text-white hover:text-main transition duration-300 ease-in-out" // MENU CONTACT texts color
        >
            {children}
        </Link>
    );
};
