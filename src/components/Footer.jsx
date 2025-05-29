import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '../assets/companyLogo2025.jpg'
import instagramLogo from '../assets/instagram.png'
import linkedinLogo from '../assets/linkedin-logo.png'
import facebookLogo from '../assets/facebook.png'

const Footer = () => {
  return (
    <div 
      className='relative h-[500px]'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='fixed bottom-0 h-[500px] w-full'>
        <div className='bg-biege-primary py-8 px-12 h-full w-full flex flex-col justify-between'>
            <div className='flex shrink-0 gap-20'>
                <div className='flex flex-col gap-2'>
                    <h3 className='mb-2 uppercase text-black'>Navigation</h3>
                    <Link to='/' className='hover:text-primary transition-colors duration-300'>Home</Link>
                    <Link to='/subjects' className='hover:text-primary transition-colors duration-300'>Subjects</Link>
                    <Link to='/tutors' className='hover:text-primary transition-colors duration-300'>Our Tutors</Link>
                    <Link to='/contact' className='hover:text-primary transition-colors duration-300'>Contact</Link>
                    <Link to='/privacy' className='hover:text-primary transition-colors duration-300'>Privacy Policy</Link>
                    <Link to='/legal' className='hover:text-primary transition-colors duration-300'>Legal Terms</Link>
                </div>
                <div className='flex flex-col gap-2'>
                  <h3 className='mb-2 uppercase text-black'>Socials</h3>
                  <ul>
                    <li className='mb-2'>
                      <a href='https://www.instagram.com/taiyo_tuition/?hl=en' target='_blank' rel='noopener noreferrer'>
                        <img src={instagramLogo} alt='Instagram logo' className='w-6 h-6 rounded-lg hover:opacity-80 transition-opacity duration-300' />
                      </a>
                    </li>
                    <li className='mb-2'>
                      <a href='https://www.linkedin.com/company/taiyo-tuition/' target='_blank' rel='noopener noreferrer'>
                        <img src={linkedinLogo} alt='LinkedIn logo' className='w-6 h-6 hover:opacity-80 transition-opacity duration-300' />
                      </a>
                    </li>
                    <li className='mb-2'>
                      <a href='https://www.facebook.com/profile.php?id=61569894218115' target='_blank' rel='noopener noreferrer'>
                        <img src={facebookLogo} alt='Facebook logo' className='w-6 h-6 hover:opacity-80 transition-opacity duration-300' />
                      </a>
                    </li>
                  </ul>
                </div>
                </div>
              <div className='flex justify-between items-end'>
                <div className='flex items-center gap-2'>
                  {/* <img src={logo} alt='logo' className='w-12 h-12 rounded-lg' /> */}
                  <h1 className='text-5xl uppercase font-bold leading-[0.8]'>Taiyo Tuition</h1>
                </div>
                <p>© 2025 Taiyo Tuition. All rights reserved | <Link to='/privacy' className='hover:text-primary transition-colors duration-300'>Privacy</Link> | <Link to='/legal' className='hover:text-primary transition-colors duration-300'>Legal</Link></p>
                </div>      
        </div>
      </div>
    </div>
  )
}

export default Footer