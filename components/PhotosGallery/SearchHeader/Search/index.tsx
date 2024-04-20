import { useDebounceCallback } from "usehooks-ts"
import { SearchIcon } from "lucide-react"

import { Input } from "@/components/ui/input"

interface Props {
    query: string
    setQuery: (query: string) => void
}

export const Search: React.FC<Props> = ({ query, setQuery }) => {
    const debounced = useDebounceCallback(setQuery, 600)
    return (
        <div className='w-full'>
            <Input
                className='w-1/2'
                startIcon={SearchIcon}
                type='text'
                placeholder='Search ...'
                defaultValue={query}
                onChange={(event) => debounced(event.target.value)}
            />
        </div>
    )
}
