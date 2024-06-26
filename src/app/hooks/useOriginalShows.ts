import { useQuery } from "@tanstack/react-query";
import getOriginalShows from "../utils/get-original-shows";

export default function useOriginalShows(){
    const query = useQuery({
        queryFn: getOriginalShows,
        queryKey: ["originals"]
    })

    return{
        ...query,
        data: query.data
    }
}
