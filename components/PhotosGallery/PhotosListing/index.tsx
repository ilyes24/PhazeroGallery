import { useCallback, useMemo, useRef } from "react"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useSessionStorage } from "usehooks-ts"

import { PhotoCard } from "@/components/PhotosGallery/PhotosListing/PhotoCard"

interface Props {
    query: string
}

const fetchPhotos = async ({
    query,
    pageParam,
}: {
    query: string
    pageParam: number
}) => {
    const path = query ? "search/photos/" : "photos/"
    const params = new URLSearchParams({
        page: pageParam.toString(),
        per_page: "20",
        client_id: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY ?? "",
    })
    if (query) {
        params.set("query", query)
    }
    const response = await fetch(
        `https://api.unsplash.com/${path}?${params.toString()}`
    )

    const photos = await response.json()
    return photos
}

export const PhotosListing: React.FC<Props> = ({ query }) => {
    const [value, setValue, removeValue] = useSessionStorage("favorites", [
        "KDYGrlXsHtQ",
    ])

    const observer = useRef<IntersectionObserver>()

    const { data, fetchNextPage, hasNextPage, isFetching, isLoading, isError } =
        useInfiniteQuery({
            initialPageParam: 1,
            queryKey: ["photos", query],
            queryFn: ({ pageParam }) => fetchPhotos({ query, pageParam }),
            getNextPageParam: (lastPage, allPages) => {
                if (query) {
                    return lastPage.total_pages > allPages.length
                        ? allPages.length + 1
                        : undefined
                }
                return lastPage.length ? allPages.length + 1 : undefined
            },
        })

    const toggleItemInFavorites = (photoId: string) => {
        if (value.find((item) => item === photoId)) {
            setValue(value.filter((item) => item !== photoId))
        } else {
            setValue([...value, photoId])
        }
    }
    const lastElementRef = useCallback(
        (node: HTMLDivElement) => {
            if (isLoading) return

            if (observer.current) observer.current.disconnect()

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasNextPage && !isFetching) {
                    fetchNextPage()
                }
            })

            if (node) observer.current.observe(node)
        },
        [fetchNextPage, hasNextPage, isFetching, isLoading]
    )

    const photos = useMemo(() => {
        if (query) {
            return data?.pages.reduce((acc, page) => {
                return [...acc, ...page.results]
            }, [])
        }

        return data?.pages.reduce((acc, page) => {
            return [...acc, ...page]
        }, [])
    }, [data, query])

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error</div>}

            {photos?.map((photo: any) => (
                <div key={photo.id} ref={lastElementRef}>
                    <PhotoCard
                        photo={photo}
                        isInFavorites={value.find((item) => item === photo.id)}
                        toggleItemInFavorites={toggleItemInFavorites}
                    />
                </div>
            ))}
        </div>
    )
}
