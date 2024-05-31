"use client"
import { ReactElement } from "react";
import usePreview from "@/app/hooks/usePreview";
import Loading from "./Loading";
import getYearDate from "@/app/hooks/get-year-date";
import PlayButton from "./PlayButton";
import MoreInfoButton from "./MoreInfoButton";

export default function Preview():ReactElement{
    const {data, isPending, isSuccess} = usePreview()

    return(
        <section className="flex relative px-4 overflow-x-hidden sm:px-16" style={{height: "calc(100vh - 72px)"}}>
            {
                isPending && (
                    <Loading/>
                )
            }
            {
                isSuccess && (
                    <>
                        <div className="flex flex-col justify-center break-words bg-gradient-to-r from-dark to-transparent z-2 sm:max-w-150 sm:min-w-100">
                            <div>
                                <h1 className="text-4xl font-bold text-white uppercase sm:text-6xl">{data?.name}</h1>
                                <div className="flex gap-2 text-base font-bold text-white mt-4 sm:text-lg">
                                    <span className="text-green-100">{data?.vote_average.toFixed(1)} pontos</span>
                                    <span>{data?getYearDate(data?.first_air_date): undefined}</span>
                                    <span>{`${data?.number_of_seasons} ${data? data?.number_of_seasons > 1? "temporadas":"temporada": undefined}`}</span>
                                </div>
                                <p className="text-base text-gray-100 mt-4 sm:text-xl">{`${data?.overview.slice(0, 250)}...`}</p>
                            </div>

                            <div className="flex gap-4 mt-8">
                                <PlayButton/>
                                <MoreInfoButton/>
                            </div>
                        </div>

                        <div className="w-full h-full absolute" style={{background: `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`, backgroundPosition: "center top", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}></div>
                    </>
                )
            }
        </section>
    )
}