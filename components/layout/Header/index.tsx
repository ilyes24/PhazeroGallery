import React from "react"
import Link from "next/link"
import { HeartIcon } from "lucide-react"

export const Header: React.FC = () => {
    return (
        <header className='w-full flex justify-between items-center px-8 py-4 fixed top-0 z-50 transition duration-300 bg-white shadow-md'>
            <div>
                <Link href='/'>
                    <span className='text-primary-foreground'>
                        Phaze<span className='text-primary'>Ro</span>{" "}
                        <span className='text-xs font-bold opacity-50'>
                            Gallery
                        </span>
                    </span>
                </Link>
            </div>
            <div>
                <Link href='/favorites'>
                    <span className='flex gap-2 items-center hover:text-primary'>
                        <span>
                            <HeartIcon />
                        </span>
                        <span className='hidden md:block'>Favorites</span>
                    </span>
                </Link>
            </div>
        </header>
    )
}
