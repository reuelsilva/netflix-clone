import { useQuery } from "@tanstack/react-query";
import getTitleShow from "../utils/get-title-show";
import getIdShow from "../utils/get-id-show";

export default function usePreview(){
    const {data:id} = useQuery({
        queryFn: getIdShow,
        queryKey: ["id"],
        refetchOnWindowFocus: false
    })

    const query = useQuery({
        queryFn: id? () => getTitleShow(id): undefined,
        queryKey: ["title"],
        enabled: !!id,
        refetchOnWindowFocus: false
    })

    return {
        ...query,
        data: query.data
    }
}