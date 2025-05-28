import React from 'react'
import { Link } from 'react-router-dom'
import classImgWide from '../assets/600x400.svg'
import classImgNarrow from '../assets/400x400.svg'

const ClassInfo = () => {
  return (
    <section className='h-auto w-full bg-biege-primary section-card'>
        <div className='mx-auto flex flex-col flex-wrap items-center justify-center container-responsive'>
              <h1 className='text-4xl uppercase font-bold mb-12 text-center'>Our Learning Methods</h1>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden'>
                  <div className='col-span-2 bg-white rounded-lg w-full min-h-[300px] flex items-start justify-start shadow-md flex-col max-md:col-span-1'>
                      <img src={classImgWide} alt='classImgWide' className='w-full h-[350px] object-cover rounded-lg' />
                      <div className='grid grid-cols-2 w-full p-4 max-sm:grid-cols-1'>
                          <div className='col-span-1 mb-4'>
                              <h2 className='text-2xl font-bold mb-2'>Term Classes</h2>
                              <p className='text-pretty mb-4'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                              </p>
                              <Link 
                                to='/subjects'
                                className='bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors duration-300 cursor-pointer inline-block'
                              >
                                Learn More
                              </Link>
                        </div>
                        <div className='col-span-1 mb-4'>
                              <h2 className='text-2xl font-bold mb-2'>Holiday Classes</h2>
                              <p className='text-pretty mb-4'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                              </p>
                              <Link 
                                to='/subjects'
                                className='bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors duration-300 cursor-pointer inline-block'
                              >
                                Learn More
                              </Link>
                        </div>
                      </div>
                  </div>
                  <div className='bg-white rounded-lg w-full min-h-[300px] flex items-start justify-start shadow-md flex-col'>
                      <img src={classImgNarrow} alt='classImgNarrow' className='w-full h-[350px] object-cover rounded-lg max-md:w-full' />
                      <div className='p-4'>
                            <h2 className='text-2xl font-bold mb-2'>Online Classes</h2>
                            <p className='text-pretty mb-4'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                          </p>
                          <Link 
                            to='/subjects'
                            className='bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors duration-300 cursor-pointer inline-block'
                          >
                            Learn More
                          </Link>
                      </div>
                  </div>
              </div>
        </div>
    </section>
  )
}

export default ClassInfo