import { ReactElement } from "react";
import Logo from "./Logo";

export default function Header():ReactElement{
    return(
        <header className='flex items-center p-6 sm:py-4 sm:px-10 bg-black'>
            <Logo/>
        </header>
    )
}