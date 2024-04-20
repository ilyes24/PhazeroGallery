import { HeartIcon } from "lucide-react"
import Link from "next/link"
import React from "react"

export const Header: React.FC = () => {
    return (
        <header className='w-full flex justify-between items-center px-8 py-4 fixed top-0 z-50 transition duration-300 bg-white shadow-md'>
            <div>
                <h1 className='text-primary-foreground'>
                    Phaze<span className='text-primary'>Ro</span>{" "}
                    <span className='text-xs font-bold opacity-50'>
                        Gallery
                    </span>
                </h1>
            </div>
            <div>
                <Link href='/favorites'>
                    <p className='flex gap-2 items-center hover:text-primary'>
                        <span>
                            <HeartIcon />
                        </span>
                        <span className='hidden md:block'>Favorites</span>
                    </p>
                </Link>
            </div>
        </header>
    )
}
