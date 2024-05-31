import { ReactElement } from "react";
import PlayIcon from "./PlayIcon";

export default function PlayButton():ReactElement{
    return(
        <button className="flex justify-center items-center pl-3 pr-4 py-2 rounded bg-white text-base font-bold hover:bg-white/75">
            <PlayIcon/>
            <span>Assistir</span>
        </button>
    )
}
