import { useInfiniteQuery, UseInfiniteQueryResult } from "@tanstack/react-query"
import axios from "axios"
import { useMemo } from "react"

interface Props<T> {
    query: string
    page?: number
    enabled?: boolean
}

export type EntityDataQuery<T> = (_props: Props<T>) => Omit<
    UseInfiniteQueryResult,
    "data"
> & {
    data: T[]
    totalRecords?: number
    totalPages?: number
    page?: number
    pageSize?: number
}

export function getDataEntityList<T>(): EntityDataQuery<T> {
    return ({ page, query, enabled = true }: Props<T>) => {
        const path = query ? `search/photos/` : `photos/`
        const { data, ...res } = useInfiniteQuery({
            initialPageParam: 1,
            queryKey: [path, query, page ?? 1],
            queryFn: async () => {
                const params = new URLSearchParams({
                    client_id:
                        process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY ?? "",
                    page: page?.toString() ?? "1",
                    per_page: "20",
                })

                if (query) {
                    params.append("query", query)
                }
                const res = await axios.get(
                    "https://api.unsplash.com/" + path,
                    {
                        params,
                    }
                )
                return (
                    res && {
                        data: res.data,
                        link: res.headers.link,
                        currentPage: page ?? 1,
                        totalPages: res.headers["x-total"],
                        pageSize: res.headers["x-per-page"],
                    }
                )
            },
            getNextPageParam: (lastPage, lastPageParam) => {
                if (lastPage.link) {
                    const nextPage = lastPage.link
                        .split(",")
                        .find((link: string) => link.includes('rel="next"'))
                    if (nextPage) {
                        const nextPageURL = nextPage
                            .match(/page=[0-9]*/)?.[0]
                            .split("=")?.[1]
                        return nextPageURL
                    }

                    return undefined
                }

                return undefined
            },
            getPreviousPageParam: (lastPage) => {
                if (lastPage.link) {
                    const prevPage = lastPage.link
                        .split(",")
                        .find((link: string) => link.includes('rel="prev"'))
                    if (prevPage) {
                        const prevPageURL = prevPage
                            .match(/page=[0-9]*/)?.[0]
                            .split("=")?.[1]
                        return prevPageURL
                    }
                    return undefined
                }
                return undefined
            },
            enabled,
        })

        return useMemo(() => {
            const inlinedPages =
                data?.pages.reduce((list, page) => {
                    console.log("page", page)
                    console.log("list", list)
                    return [...list, ...page.data]
                }, [] as any) || []
            return {
                ...res,
                data: inlinedPages,
                totalPages: data?.pages?.[0].totalPages,
                pageSize: data?.pages?.[0].pageSize,
            }
        }, [data, res])
    }
}
