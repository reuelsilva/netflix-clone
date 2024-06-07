"use client"
import { ReactElement, useState } from "react";
import HorizontalRow from "../HorizontalRow";
import toggleScrollButttons from "@/app/utils/toggle-scroll-buttons";
import RowTitle from "../RowTitle";
import ArrowBack from "../ArrowBack";
import ArrowNext from "../ArrowNext";
import Top10MoviesList from "./Top10MoviesList";

export default function Top10Movies():ReactElement{
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
        let listW = window.document.getElementById("top10-movies-row-list")?.offsetWidth
        if(listW && (window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 144
        }
        setScrollX(x)
    }

    return(
        <HorizontalRow id="top10-movies-row" onMouseEnter={() => toggleScrollButttons("#top10-movies-row > button")} onMouseLeave={() => toggleScrollButttons("#top10-movies-row > button")}>
            <RowTitle>Brasil: top 10 em filmes hoje</RowTitle>
            <ArrowBack onClick={() => scrollingLeft(scrollX)}/>
            <ArrowNext onClick={() => scrollingRight(scrollX)}/>
            <Top10MoviesList marginLeft={scrollX}/>   
        </HorizontalRow>
    )
}
