import axios from "axios";

interface TitleData{
    backdrop_path: string,
    first_air_date: string,
    number_of_seasons: number,
    name: string,
    overview: string,
    vote_average: number
}

export default async function getTitleShow(id:string){
    const title: TitleData = await axios.get<TitleData>(`https://api.themoviedb.org/3/tv/${id}?language=pt-BR&api_key=88510a469fb54c19aacf43c55678e084`)
    .then(res => res.data)

    return title
}
