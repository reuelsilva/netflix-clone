import React, { HTMLAttributes, MouseEvent, ReactElement } from "react";

interface HorizontalRowProps extends HTMLAttributes<HTMLElement>{
    id: string,
    onMouseEnter: (event: MouseEvent<HTMLElement>) => void,
    onMouseLeave: (event: MouseEvent<HTMLElement>) => void,
    children: React.ReactNode,
    style? : React.CSSProperties
}

export default function HorizontalRow({id, children, onMouseEnter, onMouseLeave, style}: HorizontalRowProps):ReactElement{
    return(
        <section id={id} className="relative px-4 sm:px-16 mb-14 z-2 overflow-x-hidden bg-gradient-to-b from-transparent-dark from-0% to-dark to-7.48%" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={style}>
            {children}
        </section>
    )
}
