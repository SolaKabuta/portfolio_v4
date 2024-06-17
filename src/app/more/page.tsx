import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";


export default function more () {
    return <main className={'bg-third_color h-screen grid place-items-center'}>
        <section>
            <DropdownMenu>
                <DropdownMenuTrigger className={'uppercase flex justify-end'}>Menu</DropdownMenuTrigger>
                <DropdownMenuContent className={'bg-second_color text-main_color border-0'}>
                    <DropdownMenuLabel><a href="/">Home</a></DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem><a href="">Work</a></DropdownMenuItem>
                    <DropdownMenuItem><a href="">Playground</a></DropdownMenuItem>
                    <DropdownMenuItem><a href="">Photography</a></DropdownMenuItem>
                    <DropdownMenuItem><a href="">Contact</a></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className={'flex justify-between text-center gap-56 py-44'}>
                <a href="">
                    <h5 className={'font-black text-7xl'}>
                    Playground <br/>
                    <span className={'font-light text-sm'}>(stylish name for side projects)</span>
                </h5>
                </a>
                <a href="">
                    <h6 className={'font-black text-7xl'}>
                        Photography <br/>
                        <span className={'font-light text-sm'}>(Yes developers can do art stuff too)</span>
                    </h6>
                </a>
            </div>
        </section>
    </main>
}
