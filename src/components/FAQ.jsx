import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import ScrollAnimateText from './ScrollAnimateText'

const FAQ = () => {
  const [openItems, setOpenItems] = React.useState(new Set())

  const faqData = [
    {
      id: 1,
      question: "What subjects do you offer tutoring for?",
      answer: "We offer comprehensive tutoring for VCE subjects including Mathematics (Mathematical Methods, Specialist Mathematics, General Mathematics), Sciences (Chemistry, Physics, Biology), English, and other core VCE subjects. Our tutors are specialists in their respective fields with proven track records."
    },
    {
      id: 2,
      question: "What are your class sizes?",
      answer: "We maintain small class sizes to ensure personalized attention for each student. Our regular classes typically have 4-6 students maximum, allowing for individualized support while still benefiting from peer learning. We also offer one-on-one tutoring sessions for students who need more focused attention."
    },
    {
      id: 3,
      question: "Do you offer online classes?",
      answer: "Yes! We offer both in-person and online classes to accommodate different learning preferences and schedules. Our online classes use interactive platforms that allow for real-time collaboration, screen sharing, and digital whiteboards to ensure the same quality of education as our in-person sessions."
    },
    {
      id: 4,
      question: "What is your teaching methodology?",
      answer: "Our teaching methodology focuses on understanding concepts deeply rather than rote memorization. We use a structured approach that includes concept explanation, worked examples, guided practice, and independent problem-solving. Regular assessments help track progress and identify areas for improvement."
    },
    {
      id: 5,
      question: "When do holiday intensive programs run?",
      answer: "Our holiday intensive programs run during school holidays - typically in April, July, September/October, and December/January. These programs are designed to help students get ahead, catch up on missed content, or prepare intensively for upcoming exams. Program schedules are announced well in advance."
    },
    {
      id: 6,
      question: "How do I enroll my child?",
      answer: "Enrollment is simple! Contact us via phone or email to discuss your child's needs and schedule a consultation. We'll assess their current level, discuss goals, and recommend the most suitable program. Once enrolled, we provide all necessary materials and resources to get started."
    },
    {
      id: 7,
      question: "What are your fees and payment options?",
      answer: "Our fees vary depending on the subject, class type (group or individual), and program duration. We offer flexible payment options including term payments and holiday program packages. Contact us for detailed pricing information and to discuss payment plans that work for your family."
    },
    {
      id: 8,
      question: "Do you provide study materials?",
      answer: "Absolutely! We provide comprehensive study materials including practice exercises, exam papers, summary notes, and digital resources. All materials are included in your tuition fees and are regularly updated to align with the latest VCE curriculum requirements."
    }
  ]

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  const handleKeyDown = (event, id) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggleItem(id)
    }
  }

  return (
    <section className='h-auto w-full bg-linear-0 to-gradient-secondary from-gradient-primary section-card'>
      <div className='mx-auto flex flex-col flex-wrap items-center justify-center container-responsive'>
        <ScrollAnimateText as="h1" className='text-4xl uppercase font-bold mb-12 text-center'>
          Frequently Asked Questions
        </ScrollAnimateText>
        <div className='w-full max-w-4xl'>
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className='mb-4'
            >
              <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'>
                <button
                  onClick={() => toggleItem(faq.id)}
                  onKeyDown={(e) => handleKeyDown(e, faq.id)}
                  className='w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset cursor-pointer hover:bg-gray-50 transition-colors duration-200'
                  aria-expanded={openItems.has(faq.id)}
                  aria-controls={`faq-answer-${faq.id}`}
                  tabIndex="0"
                >
                  <h3 className='text-lg font-semibold text-gray-900 pr-4'>
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openItems.has(faq.id) ? 45 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className='flex-shrink-0 w-6 h-6 flex items-center justify-center'
                  >
                    <svg 
                      className='w-5 h-5 text-primary' 
                      fill='none' 
                      stroke='currentColor' 
                      viewBox='0 0 24 24'
                    >
                      <path 
                        strokeLinecap='round' 
                        strokeLinejoin='round' 
                        strokeWidth={2} 
                        d='M12 6v6m0 0v6m0-6h6m-6 0H6' 
                      />
                    </svg>
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openItems.has(faq.id) && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className='overflow-hidden'
                    >
                      <div className='px-6 pb-4 pt-0'>
                        <div className='border-t border-gray-100 pt-4'>
                          <p className='text-gray-700 leading-relaxed'>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ