import axios from "axios";

interface NewReleases{
    poster_path: string
}

export default async function getNewReleases(){
    const releases = await axios.get<{results: NewReleases[]}>("https://api.themoviedb.org/3/discover/tv?page=1&sort_by=primary_release_date.desc&with_watch_providers=8&watch_region=BR&api_key=88510a469fb54c19aacf43c55678e084")
    .then((res) => res.data)
    .then((data) => data.results)

    return releases
}
