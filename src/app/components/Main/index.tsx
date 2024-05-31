"use client"
import { ReactElement } from "react"
import Preview from "./Preview"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export default function Main():ReactElement{
    const client = new QueryClient()
    return(
        <main>
            <QueryClientProvider client={client}>
                <Preview/>
            </QueryClientProvider>
        </main>
    )
}
