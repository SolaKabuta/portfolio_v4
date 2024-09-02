"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div>
            <div
                className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto max-md:w-[350px] z-50", className)}>
                <Menu setActive={setActive}>
                    <Link href={'/'}>Home</Link>
                    {/*<div className="text-sm grid grid-cols-2 gap-10 p-4">*/}
                    {/*    <Image*/}
                    {/*        src="/assets/icons/logo_original.svg"*/}
                    {/*        width={40}*/}
                    {/*        height={40}*/}
                    {/*        alt={'/'}/>*/}
                    {/*</div>*/}
                    <a href="#work">
                        <MenuItem setActive={setActive} active={active} item="Work">
                            <div className="group text-sm grid grid-cols-2 gap-10 p-4">
                                <ProductItem
                                    title="Cabinet Coppens"
                                    href="https://cabinetcoppens.be/"
                                    src="assets/thumbnails/coppens_imac.png"
                                    description="Mastering accounting for balanced finances"
                                />
                                <ProductItem
                                    title="MARTINE Henderyckx"
                                    href="https://martine.mobilstudio.be/"
                                    src="assets/thumbnails/martine_thumbnail.png"
                                    description="The art of guidance for living in harmony with oneself"
                                />
                            </div>
                        </MenuItem>
                    </a>

                    <MenuItem setActive={setActive} active={active} item="Contact">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink target={'_blank'} href="mailto:solakabuta@gmail.com">Mail</HoveredLink>
                            <HoveredLink target={'_blank'} href="https://www.linkedin.com/in/sola-kabuta/">Linkedin</HoveredLink>
                            <HoveredLink target={'_blank'} href="https://github.com/SolaKabuta">Github</HoveredLink>
                            <HoveredLink href="/assets/images/CV_Dev.pdf">CV</HoveredLink>
                        </div>
                    </MenuItem>
                </Menu>
            </div>
        </div>
    );
};

export default Navbar;