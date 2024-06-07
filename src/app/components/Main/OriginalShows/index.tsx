"use client"
import { ReactElement, useState } from "react";
import OriginalShowsList from "./OriginalShowsList";
import ArrowBack from "../ArrowBack";
import ArrowNext from "../ArrowNext";
import toggleScrollButttons from "@/app/utils/toggle-scroll-buttons";
import HorizontalRow from "../HorizontalRow";
import RowTitle from "../RowTitle";

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
        <HorizontalRow id="originals-row" onMouseEnter={() => toggleScrollButttons("#originals-row > button")} onMouseLeave={() => toggleScrollButttons("#originals-row > button")} style={{marginTop: "-56px"}}>
            <ArrowBack onClick={() => scrollingLeft(scrollX)}/>
            <ArrowNext onClick={() => scrollingRight(scrollX)}/>
            <RowTitle>Originais Netflix</RowTitle>
            <OriginalShowsList marginLeft={scrollX}/>
        </HorizontalRow>
    )
}
