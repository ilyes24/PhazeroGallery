import { Search } from "@/components/PhotosGallery/SearchHeader/Search"
import { ViewMode } from "@/components/PhotosGallery/SearchHeader/ViewMode"
import React from "react"

interface Props {
    query: string
    setQuery: (query: string) => void
}

export const SearchHeader: React.FC<Props> = ({ query, setQuery }) => {
    const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid")

    return (
        <div className='flex w-full justify-between items-center'>
            <Search query={query} setQuery={setQuery} />
            <ViewMode viewMode={viewMode} setViewMode={setViewMode} />
        </div>
    )
}
