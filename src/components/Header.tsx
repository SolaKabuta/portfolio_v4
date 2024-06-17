import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";


export const Header = () => {
    return (
        <header>
            <section
                className={'py-10 flex justify-between'}>
                <a href="/">
                    <h1 className={'transition hover:-translate-x-3 ease-in-out duration-700'}>
                        Sola Kabuta <span className={'text-xs'}>(Sho.la)</span>
                    </h1>
                </a>
                    <DropdownMenu>
                        <DropdownMenuTrigger className={'uppercase transition hover:translate-x-3 ease-in-out duration-700'}>Menu</DropdownMenuTrigger>
                        <DropdownMenuContent className={'bg-second_color text-main_color border-0'}>
                            <DropdownMenuLabel><a href="/">Home</a></DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem><Link href={'#work'}>Work</Link></DropdownMenuItem>
                            <DropdownMenuItem><a href="#about">About</a></DropdownMenuItem>
                            <DropdownMenuItem><Link href={'more/photography'}>Photography</Link></DropdownMenuItem>
                            <DropdownMenuItem><a href="">Contact</a></DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

            </section>
        </header>
    );
};
