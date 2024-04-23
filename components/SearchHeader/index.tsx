import { Search } from "@/components/SearchHeader/Search/index"
import { ViewMode } from "@/components/SearchHeader/ViewMode/index"
import React from "react"

interface Props {
    query: string
    setQuery: (query: string) => void
}

export const SearchHeader: React.FC<Props> = ({ query, setQuery }) => {
    const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid")

    return (
        <div className='flex flex-col-reverse gap-3 w-full justify-between items-center md:flex-row'>
            <Search query={query} setQuery={setQuery} />
            <ViewMode viewMode={viewMode} setViewMode={setViewMode} />
        </div>
    )
}
