import axios from "axios"

interface OriginalShows{
    "poster_path": string
}

export default async function getOriginalShows(){
   const originals = await axios.get<{results: OriginalShows[]}>("https://api.themoviedb.org/3/discover/tv?with_networks=213&api_key=88510a469fb54c19aacf43c55678e084")
   .then((res) => res.data)
   .then((data) => data.results)

   return originals
}
