"use client"
import { ReactElement } from "react";
import useOriginalShows from "@/app/hooks/useOriginalShows";
import Card from "../../Card";
import Image from "next/image";

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
                            <Card key={id}>
                                <Image src={`https://image.tmdb.org/t/p/original${original.poster_path}`} alt="Original Netflix" width={200} height={200}/>
                            </Card>
                        )
                    })
                )
            }
        </div>
    )
}
