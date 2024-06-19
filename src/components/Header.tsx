import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import Image from "next/image";



export const Header = () => {
    return (
        <header>
            <section
                className={'py-10 flex justify-between align-middle'}>
                <a href="/">
                    <h1 className={'transition hover:translate-x-3 ease-in-out duration-700'}>
                        Sola Kabuta
                    </h1>
                </a>
                <Link
                    href={'/'}>
                    <Image
                    className={''}
                    src={'/assets/icons/logo_original.svg'}
                    alt={'Sola Kabuta logo'}
                    width={30}
                    height={30}/>
                </Link>
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
