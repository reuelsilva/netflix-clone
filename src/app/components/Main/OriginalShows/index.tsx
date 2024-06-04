"use client"
import { ReactElement, useState } from "react";
import OriginalShowsList from "./OriginalShowsList";
import ArrowBack from "../ArrowBack";
import ArrowForward from "../ArrowForward";
import toggleScrollButttons from "@/app/hooks/toggle-scroll-buttons";

export default function OriginalShows():ReactElement{
    const [scrollX, setScrollX] = useState(0)

    const scrollingLeft = (scrollX: number) => {
        let x = scrollX + (window.innerWidth/2)
        if(x > 0){
            x = 0
        }
        setScrollX(x)
    }

    const scrollingRight = (scrollX: number) => {
        let x = scrollX - (window.innerWidth/2)
        let listW = window.document.getElementById("originals-row-list")?.offsetWidth
        if(listW && (window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 144
        }
        setScrollX(x)
    }
    
   return(
        <section id="originals-row" className="relative px-4 sm:px-16 mb-14 -mt-14 z-2 overflow-x-hidden bg-gradient-to-b from-transparent-dark from-0% to-dark to-7.48%" onMouseEnter={toggleScrollButttons} onMouseLeave={toggleScrollButttons}>
            <ArrowBack onClick={() => scrollingLeft(scrollX)}/>
            <ArrowForward onClick={() => scrollingRight(scrollX)}/>
            <h2 className="text-xl mb-4 text-white font-bold">Originais Netflix</h2>
            <OriginalShowsList marginLeft={scrollX}/>
        </section>
    )
}
