import { MouseEvent, ReactElement } from "react";
import ArrowNextIcon from "./ArrowNextIcon";

interface ArrowNextProps{
    onClick: (event: MouseEvent<HTMLButtonElement>) => void,
}

export default function ArrowNext({onClick}: ArrowNextProps):ReactElement{
    return(
        <button className="w-12 h-49.5 absolute right-0 bottom-0 z-2 bg-black-100 opacity-100 sm:opacity-0" onClick={onClick}>
            <ArrowNextIcon/>
        </button>
    )
}
