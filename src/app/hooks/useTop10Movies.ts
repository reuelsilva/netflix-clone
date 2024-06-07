import { useQuery } from "@tanstack/react-query";
import getTop10Movies from "../utils/get-top10-movies";

export default function useTop10Movies(){
    const query = useQuery({
        queryFn: getTop10Movies,
        queryKey: ["top10movies"]
    })

    return{
        ...query,
        data: query.data
    }
}
