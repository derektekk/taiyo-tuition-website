import React from 'react'
import { motion, useInView } from 'motion/react'

const ScrollAnimateText = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  distance = 30,
  className = "",
  as = "div" 
}) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const MotionComponent = motion[as]

  return (
    <MotionComponent
      ref={ref}
      className={className}
      initial={{ 
        opacity: 0, 
        x: -distance 
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0 
      } : {
        opacity: 0, 
        x: -distance 
      }}
      transition={{ 
        duration: duration,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smooth animation
      }}
    >
      {children}
    </MotionComponent>
  )
}

export default ScrollAnimateText 