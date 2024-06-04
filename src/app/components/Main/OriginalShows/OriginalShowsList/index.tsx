"use client"
import useOriginalShows from "@/app/hooks/useOriginalShows";
import Image from "next/image";
import { ReactElement } from "react";

interface OriginalShowsListProps{
    marginLeft: number
}

export default function OriginalShowsList({marginLeft}: OriginalShowsListProps):ReactElement{
    const {data, isSuccess} = useOriginalShows()
    
    return(
        <div id="originals-row-list" className="flex w-fit gap-4 transition-marginLeft duration-800" style={{marginLeft: marginLeft}}>
            {
                isSuccess && (
                    data?.map((original, id) => {
                        return(
                            <div key={id} className="w-33 h-49.5 cursor-pointer rounded overflow-hidden">
                                <Image className="max-w-fit" src={`https://image.tmdb.org/t/p/original${original.poster_path}`} alt="Show Poster" width={132} height={198}/>
                            </div>
                        )
                    })
                )
            }
        </div>
    )
}
