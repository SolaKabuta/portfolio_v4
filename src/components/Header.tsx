import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";



export const Header = () => {
    return (
        <header>
            <section
                className={'py-10 flex justify-between'}>
                <a href="/">
                    <h1 className={'transition hover:translate-x-3 ease-in-out duration-700'}>
                        Sola Kabuta <span className={'text-xs'}>(Sho.la)</span>
                    </h1>
                </a>
                <Sheet>
                    <SheetTrigger className={'uppercase transition hover:-translate-x-3 ease-in-out duration-700'}>Menu</SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle className={'Titles'}><a href={'/'}>Home</a></SheetTitle>
                            <SheetTitle className={'Titles'}><Link href={'#work'}>Work</Link></SheetTitle>
                            <SheetTitle className={'Titles'}><a href={'#about'}>About</a></SheetTitle>
                            <SheetTitle className={'Titles'}><a href={'#contact'}>Contact</a></SheetTitle>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>


            </section>
        </header>
    );
};
