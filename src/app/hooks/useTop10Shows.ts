import { useQuery } from "@tanstack/react-query";
import getTop10Shows from "../utils/get-top10-shows";

export default function useTop10Shows(){
    const query = useQuery({
        queryFn: getTop10Shows,
        queryKey: ["top10shows"]
    })

    return{
        ...query,
        data: query.data
    }
}
