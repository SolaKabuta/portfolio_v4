import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export const Header = () => {
    return (
        <header>
            <section
                className={'py-10 flex justify-between'}>
                <a href="#">
                    <h1>
                        Sola Kabuta <span className={'text-xs'}>(Sho.la)</span>
                    </h1>
                </a>
                    <DropdownMenu>
                        <DropdownMenuTrigger className={'uppercase'}>Menu</DropdownMenuTrigger>
                        <DropdownMenuContent className={'bg-second_color text-main_color border-0'}>
                            <DropdownMenuLabel><a href="/">Home</a></DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem><a href="">Work</a></DropdownMenuItem>
                            <DropdownMenuItem><a href="">Playground</a></DropdownMenuItem>
                            <DropdownMenuItem><a href="">Photography</a></DropdownMenuItem>
                            <DropdownMenuItem><a href="">Contact</a></DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

            </section>
        </header>
    );
};
