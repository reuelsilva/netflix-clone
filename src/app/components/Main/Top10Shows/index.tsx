"use client"
import { ReactElement, useState } from "react";
import HorizontalRow from "../HorizontalRow";
import RowTitle from "../RowTitle";
import ArrowBack from "../ArrowBack";
import ArrowNext from "../ArrowNext";
import toggleScrollButttons from "@/app/utils/toggle-scroll-buttons";
import Top10ShowsList from "./Top10ShowsList";

export default function Top10Shows():ReactElement{
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
        let listW = window.document.getElementById("top10-shows-row-list")?.offsetWidth
        if(listW && (window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 144
        }
        setScrollX(x)
    }

    return(
        <HorizontalRow id="top10-shows-row" onMouseEnter={() => toggleScrollButttons("#top10-shows-row > button")} onMouseLeave={() => toggleScrollButttons("#top10-shows-row > button")}>
            <ArrowBack onClick={() => scrollingLeft(scrollX)}/>
            <ArrowNext onClick={() => scrollingRight(scrollX)}/>
            <RowTitle>Brasil: top 10 em séries</RowTitle>
            <Top10ShowsList marginLeft={scrollX}/>
        </HorizontalRow>
    )
}
