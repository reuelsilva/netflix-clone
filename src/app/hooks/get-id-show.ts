import axios from "axios";
import getRandomInRange from "./get-random-in-range";

interface Title{
    id: string
}

export default async function getIdShow(){
    const titles: Title[] = await axios.get<{results: Title[]}>("https://api.themoviedb.org/3/discover/tv?with_networks=213&api_key=88510a469fb54c19aacf43c55678e084")
    .then((res) => res.data)
    .then((data) => data.results)

    const random = getRandomInRange(titles.length)
    const title: Title = titles[random]
    const id:string = title.id

    return id
}
