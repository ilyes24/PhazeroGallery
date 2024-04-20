import { Button } from "@/components/ui/button"
import { Grid3X3Icon, ListIcon } from "lucide-react"

interface Props {
    viewMode: "grid" | "list"
    setViewMode: (viewMode: "grid" | "list") => void
}

export const ViewMode: React.FC<Props> = ({ viewMode, setViewMode }) => {
    return (
        <div className='w-full flex gap-3 justify-end'>
            <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size='icon'
                onClick={() => setViewMode("list")}
            >
                <ListIcon
                    className={viewMode === "list" ? "text-white" : ""}
                    size={18}
                />
            </Button>
            <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size='icon'
            >
                <Grid3X3Icon
                    className={viewMode === "grid" ? "text-white" : ""}
                    size={18}
                    onClick={() => setViewMode("grid")}
                />
            </Button>
        </div>
    )
}
