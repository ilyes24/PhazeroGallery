export class PhotoSearch {
    query?: string
}

export interface User {
    id: string
    name: string
    username: string
    profile_image: {
        small: string
        medium: string
        large: string
    }
}

export interface Photo {
    id: string
    alt_description: string
    slug: string
    urls: {
        raw: string
        full: string
        regular: string
        small: string
        thumb: string
    }
    likes: number
    user: User
}
