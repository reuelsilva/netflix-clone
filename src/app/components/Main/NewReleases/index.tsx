"use client"
import { ReactElement, useState } from "react";
import HorizontalRow from "../HorizontalRow";
import RowTitle from "../RowTitle";
import ArrowBack from "../ArrowBack";
import ArrowNext from "../ArrowNext";
import NewReleasesList from "./NewReleasesList";
import toggleScrollButttons from "@/app/utils/toggle-scroll-buttons";

export default function NewReleases():ReactElement{
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
        let listW = window.document.getElementById("new-releases-row-list")?.offsetWidth
        if(listW && (window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 144
        }
        setScrollX(x)
    }

    return(
        <HorizontalRow id="new-releases-row" onMouseEnter={() => toggleScrollButttons("#new-releases-row > button")} onMouseLeave={() => toggleScrollButttons("#new-releases-row > button")}>
            <ArrowBack onClick={() => scrollingLeft(scrollX)}/>
            <ArrowNext onClick={() => scrollingRight(scrollX)}/>
            <RowTitle>Novos lançamentos</RowTitle>
            <NewReleasesList marginLeft={scrollX}/>
        </HorizontalRow>
    )
}
