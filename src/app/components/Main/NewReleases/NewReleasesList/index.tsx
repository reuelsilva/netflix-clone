import useNewReleases from "@/app/hooks/useNewReleases";
import { ReactElement } from "react";
import Card from "../../Card";
import Image from "next/image";

interface NewReleasesListProps{
    marginLeft: number
}

export default function NewReleasesList({marginLeft}: NewReleasesListProps):ReactElement{
    const {data, isSuccess} = useNewReleases()
    return(
        <div id="new-releases-row-list" className="flex w-fit gap-4 transition-marginLeft duration-800" style={{marginLeft: marginLeft}}>
            {
                isSuccess && (
                    data?.map((release, id) => {
                        return(
                            <Card key={id}>
                                <Image src={`https://image.tmdb.org/t/p/original${release.poster_path}`} alt="Novo lançamento" width={200} height={200}/>
                            </Card>
                        )
                    })
                )
            }
        </div>
    )
}