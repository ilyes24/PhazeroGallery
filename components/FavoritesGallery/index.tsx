"use client"

import { PhotoCard } from "@/components/PhotoCard"
import { Photo } from "@/models/photo"
import { useLocalStorage } from "usehooks-ts"

export const FavoritesGallery: React.FC = () => {
    const [favorites, setFavorites, removeFavorites] = useLocalStorage<Photo[]>(
        "favorites",
        []
    )

    const toggleItemInFavorites = (photo: Photo) => {
        const photoId = photo.id
        const isFavorite = favorites.some((item) => item.id === photoId)

        if (isFavorite) {
            const updatedFavorites = favorites.filter(
                (item) => item.id !== photoId
            )
            removeFavorites()
            setFavorites(updatedFavorites)
        } else {
            const updatedFavorites = [...favorites, photo]
            setFavorites(updatedFavorites)
        }
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
            {favorites.length === 0 && <div>No favorites yet</div>}
            {favorites.map((favorite) => {
                try {
                    return (
                        <PhotoCard
                            key={favorite.id}
                            photo={favorite}
                            isInFavorites={true}
                            toggleItemInFavorites={toggleItemInFavorites}
                        />
                    )
                } catch (error) {
                    console.error("Error parsing favorite photo:", error)
                    return null // Skip rendering invalid data
                }
            })}
        </div>
    )
}
