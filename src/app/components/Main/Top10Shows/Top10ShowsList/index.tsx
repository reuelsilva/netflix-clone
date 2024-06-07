import useTop10Shows from "@/app/hooks/useTop10Shows";
import { ReactElement } from "react";
import Card from "../../Card";
import Image from "next/image";

interface Top10ShowsListProps{
    marginLeft: number
}

export default function Top10ShowsList({marginLeft}: Top10ShowsListProps):ReactElement{
    const {data, isSuccess} = useTop10Shows()
    return(
        <div id="top10-shows-row-list" className="flex gap-4 w-fit transition-marginLeft duration-800" style={{marginLeft: marginLeft}}>
            {
                isSuccess && (
                    data?.map((show, id) => {
                        return(
                            <Card key={id}>
                                <Image src={`https://image.tmdb.org/t/p/original${show.poster_path}`} alt={`Série top ${id+1} no Brasil`} width={200} height={200}/>
                            </Card>
                        )
                    })
                )
            }
        </div>
    )
}