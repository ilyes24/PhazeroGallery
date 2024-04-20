import { Photo } from "@/models/photo"
import { HeartIcon } from "lucide-react"
import Image from "next/image"

interface Props {
    photo: Photo
    isInFavorites: string | undefined
    toggleItemInFavorites: (photoId: string) => void
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
                <div className='flex items-center justify-between'>
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
                        onClick={() => toggleItemInFavorites(photo.id)}
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
