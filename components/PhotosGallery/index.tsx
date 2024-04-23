"use client"

import { useState } from "react"

import { SearchHeader } from "../SearchHeader"
import { PhotosListing } from "../PhotosListing"

export const PhotosGallery = () => {
    const [query, setQuery] = useState("")

    return (
        <div className='flex flex-col gap-6'>
            <SearchHeader query={query} setQuery={setQuery} />
            <PhotosListing query={query} />
        </div>
    )
}
