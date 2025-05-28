import React from 'react'
import { motion } from 'framer-motion'

const ScrollingText = () => {
  // 🚀 SPEED CONTROL: Lower values = faster, higher values = slower
  const ANIMATION_SPEED = 20 // Try values like 10 (fast), 15 (medium), 25 (slow)
  
  // ✨ Shared hover state for all links
  const [isAnyLinkHovered, setIsAnyLinkHovered] = React.useState(false)
  
  const handleMouseEnter = () => setIsAnyLinkHovered(true)
  const handleMouseLeave = () => setIsAnyLinkHovered(false)
  
  // 📱 Responsive repeat count based on screen size
  const [repeatCount, setRepeatCount] = React.useState(10)
  
  React.useEffect(() => {
    const updateRepeatCount = () => {
      const width = window.innerWidth
      if (width < 640) { // Mobile (sm)
        setRepeatCount(6)
      } else if (width < 768) { // Small tablet (md)
        setRepeatCount(8)
      } else if (width < 1024) { // Tablet (lg)
        setRepeatCount(10)
      } else if (width < 1280) { // Desktop (xl)
        setRepeatCount(12)
      } else { // Large desktop (2xl+)
        setRepeatCount(20)
      }
    }

    // Set initial count
    updateRepeatCount()

    // Add resize listener
    window.addEventListener('resize', updateRepeatCount)
    
    // Cleanup
    return () => window.removeEventListener('resize', updateRepeatCount)
  }, [])
  
  // 📝 Text content config
  const scrollText = "enrol Now &#8226;"

    return (
    <div className="flex overflow-hidden p-2 relative bg-primary" style={{ scrollBehavior: 'auto' }}>
      <motion.div
        className="flex whitespace-nowrap py-4 cursor-pointer"
        initial={{ x: "0%" }}
        animate={{
          x: ["0%", "-50%"]
        }}
        transition={{
          duration: ANIMATION_SPEED,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          delay: 0.5 // Small delay to prevent layout shift on mount
        }}
        style={{
          willChange: "transform" // Optimize for animation performance
        }}
      >
          {Array.from({ length: repeatCount }, (_, index) => (
            <a 
              href="https://pdu2aawxpdr.typeform.com/to/o6rQPFyz"
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className={`text-4xl uppercase px-2 transition-all duration-150 ${
                isAnyLinkHovered ? 'text-blue-950' : 'text-white'
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              dangerouslySetInnerHTML={{ __html: scrollText }}
            />
          ))}
        </motion.div>
    </div>
  )
}

export default ScrollingText