import React, { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import logo from '../assets/companyLogo2025.jpg'

gsap.registerPlugin(SplitText)

const Preloader = () => {
    const comp = useRef(null);
    const textRef = useRef(null);
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useLayoutEffect(() => {
        // Wait for fonts to load
        document.fonts.ready.then(() => {
            setFontsLoaded(true);
        });

        let ctx = gsap.context(() => {
            if (!fontsLoaded) return;

            const split = new SplitText(textRef.current, {type: 'chars'});

            gsap.from('#logo', {
                xPercent: '400',
                duration: 1.3,
                delay: 0.2
            })
            
            gsap.from(split.chars, {
                autoAlpha: 0,
                duration: 1,
                delay: 0.2,
                stagger: '-0.05'
            })

            gsap.to('#preloader', {
                opacity: 0,
                duration: 0.5,
                delay: 2,
            })

            return () => {
                split.revert();
            }
        }, comp);

        return () => ctx.revert();
    }, [fontsLoaded]); // Add fontsLoaded as a dependency

    return (
        <div ref={comp}>
            <div id='preloader' className='h-screen w-screen z-[100] fixed top-0 left-0 flex justify-center items-center bg-linear-165 to-gradient-secondary from-gradient-primary gap-3'>
                <img id='logo' src={logo} alt="logo" className='w-24 h-24 object-cover rounded-md z-10'/>
                <div ref={textRef} className='text-white text-4xl font-bold uppercase z-0'>
                    <h1>Taiyo Tuition</h1>
                </div>
            </div>
        </div>
    )
}

export default Preloader