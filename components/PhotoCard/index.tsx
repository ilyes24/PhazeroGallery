import {
    Tooltip,
    TooltipProvider,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Photo } from "@/models/photo"
import { HeartIcon } from "lucide-react"
import Image from "next/image"

interface Props {
    photo: Photo
    isInFavorites: boolean
    toggleItemInFavorites: (photo: Photo) => void
}

export const PhotoCard: React.FC<Props> = ({
    photo,
    isInFavorites,
    toggleItemInFavorites,
}) => {
    return (
        <div className='relative'>
            <Image
                width={50}
                height={50}
                src={photo.urls.regular}
                alt={photo.id}
                className='w-full h-auto object-cover rounded'
            />
            <div className='absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white'>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger className='w-full'>
                            <p className='truncate'>{photo.alt_description}</p>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{photo.alt_description}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <div className='flex items-center mt-4 justify-between'>
                    <div className='flex items-center'>
                        <Image
                            width={20}
                            height={20}
                            src={photo.user.profile_image.medium}
                            alt={photo.user.username}
                            className='w-8 h-8 rounded-full mr-2'
                        />
                        <span>{photo.user.name}</span>
                    </div>
                    <button
                        onClick={() => toggleItemInFavorites(photo)}
                        className={
                            isInFavorites
                                ? "text-red-500 hover:text-white"
                                : "text-white hover:text-red-500"
                        }
                    >
                        <HeartIcon
                            fill={isInFavorites ? "#EF4444" : "#FFFFFF"}
                            size={24}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}
