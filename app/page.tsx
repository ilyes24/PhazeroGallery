import { PhotosGallery } from "@/components/PhotosGallery"
import { Header } from "@/components/layout/Header"
import { HeroSection } from "@/components/layout/HeroSection"

export default function Home() {
    return (
        <>
            <Header />
            <main className='flex min-h-screen flex-col items-center px-16 py-24 md:p-24 gap-10'>
                <div className='w-full'>
                    <HeroSection />
                </div>
                <div className='w-full'>
                    <PhotosGallery />
                </div>
            </main>
        </>
    )
}
