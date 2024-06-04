import { MouseEvent, ReactElement } from "react";
import ArrowBackIcon from "./ArrowBackIcon";

interface ArrowBackProps {
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function ArrowBack({onClick}: ArrowBackProps):ReactElement{
    return(
        <button className="w-12 h-49.5 absolute left-0 bottom-0 z-2 bg-black-100 opacity-100 sm:opacity-0" onClick={onClick}>
            <ArrowBackIcon/>
        </button>
    )
}
