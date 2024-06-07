"use client"
import { ReactElement } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Preview from "./Preview"
import OriginalShows from "./OriginalShows"
import Top10Movies from "./Top10Movies"
import Top10Shows from "./Top10Shows"

export default function Main():ReactElement{
    const client = new QueryClient()
    return(
        <main>
            <QueryClientProvider client={client}>
                <Preview/>
                <OriginalShows/>
                <Top10Movies/>
                <Top10Shows/>
            </QueryClientProvider>
        </main>
    )
}
