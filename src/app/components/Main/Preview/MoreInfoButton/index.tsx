import { ReactElement } from "react";
import InfoIcon from "./InfoIcon";

export default function MoreInfoButton():ReactElement{
    return(
        <button className="flex justify-center items-center gap-1 px-4 py-2 rounded bg-white/50 text-base font-bold text-white hover:bg-white/25">
            <InfoIcon/>
            <span>Saiba mais</span>
        </button>
    )
}