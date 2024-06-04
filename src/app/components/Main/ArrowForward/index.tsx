import { MouseEvent, ReactElement } from "react";
import ArrowForwardIcon from "./ArrowForwardIcon";

interface ArrowForwardProps{
    onClick: (event: MouseEvent<HTMLButtonElement>) => void,
}

export default function ArrowForward({onClick}: ArrowForwardProps):ReactElement{
    return(
        <button className="w-12 h-49.5 absolute right-0 bottom-0 z-2 bg-black-100 opacity-100 sm:opacity-0" onClick={onClick}>
            <ArrowForwardIcon/>
        </button>
    )
}
