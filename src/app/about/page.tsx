import Amenities from '@/components/aboutPage/Amenities'
import Carousel from '@/components/aboutPage/Carousel'
import Hero from '@/components/aboutPage/Hero'
import Story from '@/components/aboutPage/Story'
import ContactUs from '@/components/ContactUs'

const page = () => {
  return (
    <><div className='py-16 container'>
        <div className='mt-8 md:mt-12 space-y-2'>
            <h1 className=''>
                How The Seed Hub grew your dream workspace.
            </h1>
            <h2 className='text-5xl md:text-6xl lg:text-8xl max-w-[900px] tracking-tight
                          md:top-0 md:left-0'>
                Designed for efficiency, built for collaboration
            </h2>
        </div>
    </div>
    <Hero />
    <Story />
    <Carousel />
    <Amenities />
    <ContactUs />
    </>
  )
}

export default page
