import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Reviews = () => {
  const reviewsData = [
    {
      id: 1,
      name: "Emma",
      author: "Year 12 Student",
      rating: 5,
      review: "Suchi helped build up my confidence as a writer, leaving me in a great position leading up to end of year exams"
    },
    {
      id: 2,
      name: "George",
      author: "Parent",
      rating: 5,
      review: "Highly recommend Taiyo tuition for any students wanting additional help in VCE."
    },
    {
      id: 3,
      name: "Shelly",
      author: "Year 12 Student",
      rating: 5,
      review: "My time at the tuition was amazing. My tutor genuinely made learning enjoyable, effective and encouraged me to meet my full potential."
    },
    {
      id: 4,
      name: "Aiden",
      author: "Year 10 Student",
      rating: 5,
      review: "Taiyo Tuition provided the support I needed to excel in my studies. My tutor's guidance helped me refine my problem-solving skills and approach exams with confidence."
    },
    {
      id: 5,
      name: "Tawagaski",
      author: "Parent",
      rating: 5,
      review: "Fantastic tutoring service! The lessons were tailored to my child's needs, and the improvement in both grades and confidence has been incredible."
    },
    {
      id: 6,
      name: "Daniel",
      author: "Year 11 Student",
      rating: 5,
      review: "I'm so grateful for my tutor's patience and dedication. They made even the most challenging topics feel manageable, and I couldn't have achieved my results without their help."
    }

  ]

  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isUserInteracting, setIsUserInteracting] = React.useState(false)
  const [screenSize, setScreenSize] = React.useState('lg')
  
  // Determine results per page based on screen size
  const getReviewsPerPage = () => {
    switch (screenSize) {
      case 'sm': return 1
      case 'md': return 2
      default: return 3 // lg and above
    }
  }
  
  const reviewsPerPage = getReviewsPerPage()
  
  // Handle screen size changes
  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setScreenSize('sm')
      } else if (width < 768) {
        setScreenSize('md')
      } else {
        setScreenSize('lg')
      }
    }
    
    // Set initial screen size
    handleResize()
    
    // Add event listener
    window.addEventListener('resize', handleResize)
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  // Reset current index when screen size changes to avoid out of bounds
  React.useEffect(() => {
    setCurrentIndex(0)
  }, [screenSize])
  
  // Auto-advance carousel
  React.useEffect(() => {
    if (isUserInteracting) return // Don't auto-advance when user is interacting
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + reviewsPerPage) >= reviewsData.length ? 0 : prevIndex + reviewsPerPage
      )
    }, 8000) // Slightly longer for reviews since they have more content
    
    return () => clearInterval(interval)
  }, [reviewsData.length, isUserInteracting, reviewsPerPage])

  // Reset user interaction after delay
  React.useEffect(() => {
    if (!isUserInteracting) return
    
    const timeout = setTimeout(() => {
      setIsUserInteracting(false)
    }, 5000) // Resume auto-advance after 5 seconds of no interaction
    
    return () => clearTimeout(timeout)
  }, [isUserInteracting, currentIndex])

  const handlePrevious = () => {
    setIsUserInteracting(true) // Pause auto-advance
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, reviewsData.length - reviewsPerPage) : Math.max(0, prevIndex - reviewsPerPage)
    )
  }

  const handleNext = () => {
    setIsUserInteracting(true) // Pause auto-advance
    setCurrentIndex((prevIndex) => 
      (prevIndex + reviewsPerPage) >= reviewsData.length ? 0 : prevIndex + reviewsPerPage
    )
  }

  // Handle pagination dot clicks
  const handlePaginationClick = (pageIndex) => {
    setIsUserInteracting(true) // Pause auto-advance
    setCurrentIndex(pageIndex * reviewsPerPage)
  }

  const currentReviews = reviewsData.slice(currentIndex, currentIndex + reviewsPerPage)

  // Swipe handling for mobile
  const handleDragEnd = (event, { offset, velocity }) => {
    const swipeThreshold = 50
    const swipeVelocityThreshold = 500

    if (offset.x > swipeThreshold || velocity.x > swipeVelocityThreshold) {
      // Swiped right - go to previous
      handlePrevious()
    } else if (offset.x < -swipeThreshold || velocity.x < -swipeVelocityThreshold) {
      // Swiped left - go to next
      handleNext()
    }
  }

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className='flex mb-3'>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <section className='h-auto w-full bg-biege-primary section-card'>
      <div className='mx-auto flex flex-col flex-wrap items-center justify-center container-responsive'>
        <h1 className='text-4xl uppercase font-bold mb-12 text-center'>What Our Students Say</h1>
        
        {/* Carousel Container with Navigation */}
        <div className='flex items-center justify-center w-full gap-4'>
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className='flex-shrink-0 bg-primary text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed max-sm:hidden cursor-pointer'
            aria-label="Previous reviews"
            disabled={currentIndex === 0}
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
            </svg>
          </button>

          {/* Reviews Grid */}
          <div className='flex-1 overflow-hidden max-w-6xl'>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`grid gap-6 w-full cursor-grab active:cursor-grabbing ${
                  screenSize === 'sm' ? 'grid-cols-1' : 
                  screenSize === 'md' ? 'grid-cols-2' : 
                  'grid-cols-3'
                }`}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                whileDrag={{ scale: 0.95 }}
              >
                {currentReviews.map((review, index) => (
                  <motion.div
                    key={`${currentIndex}-${review.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className='bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col'
                  >
                    <StarRating rating={review.rating} />
                    <p className='text-gray-700 mb-4 flex-1 italic'>"{review.review}"</p>
                    <div className='border-t pt-4'>
                      <p className='font-semibold text-primary text-lg'>{review.name}</p>
                      <p className='text-sm text-gray-600'>{review.author}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className='flex-shrink-0 bg-primary text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed max-sm:hidden cursor-pointer'
            aria-label="Next reviews"
            disabled={currentIndex + reviewsPerPage >= reviewsData.length}
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </button>
        </div>
        
        {/* Pagination Dots */}
        <div className='flex space-x-2 mt-8'>
          {Array.from({ length: Math.ceil(reviewsData.length / reviewsPerPage) }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePaginationClick(i)}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                Math.floor(currentIndex / reviewsPerPage) === i 
                  ? 'bg-primary' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews