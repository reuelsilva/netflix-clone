import { ReactElement } from "react";

interface CardProps{
    children: React.ReactNode,
}

export default function Card({children}: CardProps):ReactElement{
    return(
        <div className="w-33 h-49.5 cursor-pointer rounded overflow-hidden">
            {children}
        </div>
    )
}
