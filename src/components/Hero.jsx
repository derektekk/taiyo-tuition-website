import React from 'react'
import placeholder from '../assets/400x500.svg'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const Hero = () => {
    const splideOptions = {
        type: 'loop',
        direction: 'ttb',
        height: '600px',
        autoScroll: {
            speed: 0.5,
        },
        arrows: false,
        pagination: false,
        drag: false,
        wheel: false,
        releaseWheel: false,
    };


  return (
    <main className='overflow-hidden'>
        <section className='flex items-center justify-center h-[80vh] bg-linear-180 to-gradient-secondary from-gradient-primary mt-[80px]'>
            <div className='flex flex-row items-center justify-center z-10 gap-6 max-md:flex-col max-w-[1280px] mx-auto px-6 py-20'>
                <div className='bg-white p-6 rounded-lg max-md:absolute max-md:m-auto z-50 max-md:mx-6 shadow-md'>
                        <p className='text-3xl mb-4'>PRIVATE GROUP AND ONLINE TUTORING</p>
                      <p className='text-md mb-4'>Taiyo Tuition guarantees a 45+ Study Score, or your money back and with a cap of 10 students per tutorial, this is the most powerful private tuition in VIC.</p>
                      <p className='text-md mb-4'>Taiyo Tuition guarantees a 45+ Study Score, or your money back and with a cap of 10 students per tutorial, this is the most powerful private tuition in VIC.</p>
                    <a 
                      href='https://pdu2aawxpdr.typeform.com/to/o6rQPFyz'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='uppercase bg-primary text-white px-4 py-2 rounded-full cursor-pointer mb-4 hover:bg-primary/70 transition-colors duration-300 inline-block'
                    >
                      free trial
                    </a>
                </div>
                  <div className='container cursor-pointer' >
                      <Splide 
                        key="desktop-carousel"
                        options={splideOptions} 
                        extensions={{ AutoScroll }} 
                        className=''
                      >
                          <SplideSlide>
                              <div className='grid grid-cols-2 gap-4 my-4'>
                                  <div className='row-span-2'>
                                      <img src={placeholder} alt='hero' className='object-fit rounded-lg w-full h-full' />  
                                  </div>
                                  <div className='row-span-1 min-h-16 bg-primary rounded-lg p-4'>
                                      <p className='text-white'>Learn at Your Pace</p>
                                  </div>
                                  <div className='row-span-2'>
                                      <img src={placeholder} alt='hero' className='object-fit rounded-lg w-full h-full' />
                                  </div>
                                  <div className='row-span-1 min-h-16 bg-primary rounded-lg p-4'>
                                      <p className='text-white'>Expert Tutors Available</p>
                                  </div>
                                  <div className='row-span-2'>
                                      <img src={placeholder} alt='hero' className='object-fit rounded-lg w-full h-full' />
                                  </div>
                                  <div className='row-span-1 min-h-16 bg-primary rounded-lg p-4'>
                                      <p className='text-white'>Guaranteed Results</p>
                                  </div>
                                  <div className='row-span-2'>
                                      <img src={placeholder} alt='hero' className='object-fit rounded-lg w-full h-full' />  
                                  </div>
                                    <div className='row-span-1 min-h-16 bg-primary rounded-lg p-4'>
                                      <p className='text-white'>Learn at Your Pace</p>
                                  </div>
                                  <div className='row-span-2'>
                                      <img src={placeholder} alt='hero' className='object-fit rounded-lg w-full h-full' />  
                                  </div>
                                  <div className='row-span-1 min-h-16 bg-primary rounded-lg p-4'>
                                      <p className='text-white'>Learn at Your Pace</p>
                                  </div>
                                  <div className='row-span-2'>
                                      <img src={placeholder} alt='hero' className='object-fit rounded-lg w-full h-full' />  
                                  </div>
                                  <div className='row-span-1 min-h-16 bg-primary rounded-lg p-4'>
                                      <p className='text-white'>Learn at Your Pace</p>
                                  </div>
                              </div>
                          </SplideSlide>
                      </Splide>
                  </div>
                  
            </div>
        </section>
    </main>
  )
}

export default Hero