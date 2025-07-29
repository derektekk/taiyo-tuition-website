import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import ScrollAnimateText from './ScrollAnimateText'

// Custom hook for counting animation
const useCountUp = (end, duration = 500, delay = 0) => {
  const [count, setCount] = React.useState(0)
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      let startTime = null
      const startValue = 0
      const endValue = parseFloat(end)
      
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentValue = startValue + (endValue - startValue) * easeOutQuart
        
        setCount(currentValue)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(endValue) // Ensure we end at exact value
        }
      }
      
      requestAnimationFrame(animate)
    }, delay)
    
    return () => clearTimeout(timer)
  }, [end, duration, delay])
  
  return count
}

// Animated Score Component
const AnimatedScore = ({ score, delay = 0 }) => {
  const animatedValue = useCountUp(score, 1500, delay)
  
  // Format the number to show 2 decimal places
  const formattedScore = animatedValue.toFixed(2)
  
  return (
    <h3 className='text-2xl font-bold mb-1'>
      {formattedScore}
    </h3>
  )
}

const Atar = () => {
  const atarResults = [
    { score: "98.95", name: "Emma", school: "Haileybury '24" },
    { score: "99.75", name: "Oliver", school: "Scotch '24" },
    { score: "99.75", name: "Serena", school: "Mac.Rob '24" },
    { score: "99.75", name: "Daniel", school: "PEGs '22" },
    { score: "99.75", name: "Undisclosed", school: "Suzanne Cory '22" },
    { score: "99.70", name: "Aarav", school: "Haileybury '24" },
    { score: "99.70", name: "Elise", school: "Mac.Rob '24" },
    { score: "99.65", name: "Tahlia", school: "Lowther Hall '24" },
    { score: "99.65", name: "Zachary", school: "MHS '22" },
    { score: "99.65", name: "Lucas", school: "Suzanne Cory '23" },
    { score: "99.65", name: "Undisclosed", school: "JMSS '23" },
    { score: "98.60", name: "Isabella", school: "Strathcona '24" },
    { score: "98.80", name: "Hannah", school: "Haileybury '24" },
    { score: "98.60", name: "Jayden", school: "MHS '24" },
    { score: "97.60", name: "Nikhil", school: "Nossal '24" },
    { score: "97.55", name: "Sienna", school: "Mac.Rob '24" },
    { score: "97.50", name: "Kieran", school: "Caulfield GS '24" },
    { score: "97.45", name: "Thomas", school: "MHS '24" },
    { score: "96.45", name: "Adam", school: "Wesley '24" },
    { score: "96.45", name: "Emily", school: "Mac.Rob '24" },
    { score: "96.40", name: "Nathan", school: "St Kevin's '24" },
    { score: "96.40", name: "Xavier", school: "MHS '24" },
    { score: "96.40", name: "Benjamin", school: "Haileybury '24" }
  ]

  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isUserInteracting, setIsUserInteracting] = React.useState(false)
  const [screenSize, setScreenSize] = React.useState('lg')
  
  // Determine results per page based on screen size
  const getResultsPerPage = () => {
    switch (screenSize) {
      case 'sm': return 3
      case 'md': return 4
      default: return 6 // lg and above
    }
  }
  
  const resultsPerPage = getResultsPerPage()
  
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
        (prevIndex + resultsPerPage) >= atarResults.length ? 0 : prevIndex + resultsPerPage
      )
    }, 10000)
    
    return () => clearInterval(interval)
  }, [atarResults.length, isUserInteracting])

  // Reset user interaction after delay
  React.useEffect(() => {
    if (!isUserInteracting) return
    
    const timeout = setTimeout(() => {
      setIsUserInteracting(false)
    }, 5000) // Resume auto-advance after 10 seconds of no interaction
    
    return () => clearTimeout(timeout)
  }, [isUserInteracting, currentIndex])

  const handlePrevious = () => {
    setIsUserInteracting(true) // Pause auto-advance
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, atarResults.length - resultsPerPage) : Math.max(0, prevIndex - resultsPerPage)
    )
  }

  const handleNext = () => {
    setIsUserInteracting(true) // Pause auto-advance
    setCurrentIndex((prevIndex) => 
      (prevIndex + resultsPerPage) >= atarResults.length ? 0 : prevIndex + resultsPerPage
    )
  }

  // Handle pagination dot clicks
  const handlePaginationClick = (pageIndex) => {
    setIsUserInteracting(true) // Pause auto-advance
    setCurrentIndex(pageIndex * resultsPerPage)
  }

  const currentResults = atarResults.slice(currentIndex, currentIndex + resultsPerPage)

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
  return (
      <section className='h-auto w-full bg-primary py-16'>
          <div className='container-responsive mx-auto'>
              <div className='flex flex-col items-center justify-center h-full max-md:flex-col'>
                  <div className='flex flex-col items-center justify-center bg-white rounded-lg p-12 max-w-6xl mx-auto'>
                      <div className='mb-8'>
                        <ScrollAnimateText as="h1" className='text-4xl font-bold text-center text-black'>
                          Our Students' Outstanding ATAR Results
                        </ScrollAnimateText>
                        <ScrollAnimateText as="p" className='text-lg text-center text-black mt-2'>
                          Exceptional ATAR achievements from our dedicated students
                        </ScrollAnimateText>
                      </div>
                      
                      {/* Carousel Container with Navigation */}
                      <div className='flex items-center justify-center w-full gap-4'>
                        {/* Previous Button */}
                        <button
                          onClick={handlePrevious}
                          className='flex-shrink-0 bg-primary text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed max-sm:hidden cursor-pointer'
                          aria-label="Previous results"
                          disabled={currentIndex === 0}
                        >
                          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                          </svg>
                        </button>

                        {/* Results Grid */}
                        <div className='flex-1 overflow-hidden'>
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
                              {currentResults.map((result, index) => (
                                <motion.div
                                  key={`${currentIndex}-${index}`}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: index * 0.1, duration: 0.1 }}
                                  className='flex flex-col items-center justify-center bg-primary text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow'
                                >
                                  <div className='text-4xl mb-2'>🎓</div>
                                  <AnimatedScore 
                                    score={result.score} 
                                    delay={500} // All scores animate at the same time
                                  />
                                  <p className='text-lg font-medium mb-1'>{result.name}</p>
                                  <p className='text-sm text-center'>{result.school}</p>
                                </motion.div>
                              ))}
                            </motion.div>
                          </AnimatePresence>
                        </div>

                        {/* Next Button */}
                        <button
                          onClick={handleNext}
                          className='flex-shrink-0 bg-primary text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed max-sm:hidden cursor-pointer'
                          aria-label="Next results"
                          disabled={currentIndex + resultsPerPage >= atarResults.length}
                        >
                          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                          </svg>
                        </button>
                      </div>
                      
                      {/* Pagination Dots */}
                      <div className='flex space-x-2 mt-6'>
                        {Array.from({ length: Math.ceil(atarResults.length / resultsPerPage) }, (_, i) => (
                          <button
                            key={i}
                            onClick={() => handlePaginationClick(i)}
                            className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                              Math.floor(currentIndex / resultsPerPage) === i 
                                ? 'bg-primary' 
                                : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to page ${i + 1}`}
                          />
                        ))}
                      </div>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default Atar