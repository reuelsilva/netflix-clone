import { ReactElement } from "react";
import "./styles.css"

export default function Loading():ReactElement{
    return(
        <>
            <div className="loading absolute top-1/2 left-1/2  w-40 h-40 rounded-full border-8 border-solid border-t-red-100 border-b-red-100 border-l-red-100 border-r-transparent"></div>
        </>
    )
}
