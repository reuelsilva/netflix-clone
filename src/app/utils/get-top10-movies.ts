import axios from "axios";

interface Top10Movies{
    poster_path: string
}

export default async function getTop10Movies(){
    const movies = await axios.get<{results: Top10Movies[]}>("https://api.themoviedb.org/3/discover/movie?page=1&sort_by=popularity.desc&with_watch_providers=8&watch_region=BR&api_key=88510a469fb54c19aacf43c55678e084")
    .then((res) => res.data)
    .then((data) => data.results.slice(0,10))

    return movies
}