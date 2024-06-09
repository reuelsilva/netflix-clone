import { useQuery } from "@tanstack/react-query";
import getNewReleases from "../utils/get-new-releases";

export default function useNewReleases(){
    const query = useQuery({
        queryFn: getNewReleases,
        queryKey: ["new-releases"]
    })

    return{
        ...query,
        data: query.data
    }
}
