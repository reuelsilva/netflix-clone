import React, { MouseEvent, ReactElement } from "react";

interface HorizontalRowProps{
    id: string,
    onMouseEnter: (event: MouseEvent<HTMLElement>) => void,
    onMouseLeave: (event: MouseEvent<HTMLElement>) => void,
    children: React.ReactNode
}

export default function HorizontalRow({id, children, onMouseEnter, onMouseLeave}: HorizontalRowProps):ReactElement{
    return(
        <section id={id} className="relative px-4 sm:px-16 mb-14 -mt-14 z-2 overflow-x-hidden bg-gradient-to-b from-transparent-dark from-0% to-dark to-7.48%" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {children}
        </section>
    )
}
