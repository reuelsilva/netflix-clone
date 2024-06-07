import { ReactElement } from "react";
import useTop10Movies from "@/app/hooks/useTop10Movies";
import Card from "../../Card";
import Image from "next/image";

interface Top10MoviesListProps{
    marginLeft: number
}

export default function Top10MoviesList({marginLeft}:Top10MoviesListProps):ReactElement{
    const {data, isSuccess} = useTop10Movies()
    return(
        <div id="top10-movies-row-list" className="flex gap-4 w-fit transition-marginLeft duration-800" style={{marginLeft: marginLeft}}>
            {
                isSuccess && (
                    data?.map((movie, id) => {
                        return(  
                            <Card key={id}>
                                <Image src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`Filme top ${id+1} no Brasil`} width={200} height={200}/>
                            </Card>
                        )
                    })
                )
            }
        </div>
    )
}
