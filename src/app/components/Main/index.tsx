"use client"
import { ReactElement } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Preview from "./Preview"
import OriginalShows from "./OriginalShows"

export default function Main():ReactElement{
    const client = new QueryClient()
    return(
        <main>
            <QueryClientProvider client={client}>
                <Preview/>
                <OriginalShows/>
            </QueryClientProvider>
        </main>
    )
}
