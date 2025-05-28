import React from 'react'
import aboutImage from '../assets/teaching-team.jpg'
const About = () => {
  return (
    <section className='h-auto w-full bg-biege-primary section-card'>
      <div className='mx-auto flex flex-col flex-wrap items-center justify-center container-responsive'>
        <h1 className='text-4xl uppercase font-bold mb-12'>Who Are We</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch relative'>
          <div className='bg-white rounded-lg pt-6 pr-24 pl-6 pb-16 w-full min-h-[300px] flex items-start justify-start section-card-content shadow-md flex-col'>
            <h1 className='text-4xl font-bold mb-2'>👨‍🏫</h1>
            <p className='text-pretty'>
              <span className='font-bold text-xl'>Our Team</span> <br />
              At Taiyo Tuition, we bring together some of Australia's finest private tutors, ranked among the Top 2% in the country. Our team is passionate about guiding students through their academic journey, from Years 5 to 12. <br/>
            </p>
          </div>
          <div className='bg-white rounded-lg pt-6 pr-6 pl-24 pb-16 w-full min-h-[300px] flex items-end justify-start text-right max-md:pl-16 section-card-content shadow-md flex-col'>
            <h1 className='text-4xl font-bold mb-2'>👩‍🎓</h1>
            <p className='text-pretty'>
              <span className='font-bold text-xl'>Personalised Learning for Every Student!</span> <br />
              Our tutors go beyond simply teaching—they tailor learning experiences to suit each student's unique needs. With a combination of expertise and empathy, they help unlock potential and build confidence in every learner.
            </p>
          </div>
          <div className='bg-white rounded-lg pt-16 pr-24 pl-6 pb-6 w-full min-h-[300px] flex items-start justify-center max-md:pl-16 section-card-content shadow-md flex-col'>
            <h1 className='text-4xl font-bold mb-2'>💯</h1>
            <p className='text-pretty'>
              <span className='font-bold text-xl'>More Than Just Tutors—Mentors for Success!</span> <br/>
              At Taiyo Tuition, we believe in fostering long-term academic growth. Our tutors don't just focus on grades—they inspire, mentor, and empower students to excel. <br/>
            </p>
          </div>
          <div className='bg-white rounded-lg pt-16 pr-6 pl-24 pb-6 w-full min-h-[300px] flex items-end justify-center text-right max-md:pr-16 section-card-content shadow-md flex-col'>
            <h1 className='text-4xl font-bold mb-2'>📚</h1>
            <p className='text-pretty'>
              <span className='font-bold text-xl'>With Dedicated Support and Personalised Guidance</span> <br/> we create an environment where students can achieve their best! Our tutors provide structured learning plans tailored to each student's goals and learning style.
            </p>
          </div>
          <div className='absolute w-60 h-60 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10'>
            <img src={aboutImage} alt='About' className='w-full h-full object-cover rounded-4xl shadow-md border-1 border-gray-400 max-md:hidden' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About