import { useEffect, useRef } from 'react';
import { Canvas } from "@react-three/fiber";
import { Galaxy } from "./components/Galaxy";
import SlideOne from "./components/slide1";
import  gsap  from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from './components/footer';
import JobTitle from './components/jobTitle';
import { FlipWordsDemo } from './components/products';

gsap.registerPlugin(ScrollTrigger);

export default function App() {

  const slide1Ref = useRef(null);
  const slide2Ref = useRef(null);
  const slide3Ref = useRef(null);
  const slide4Ref = useRef(null);

  useEffect(() => {
    if (slide1Ref.current && slide2Ref.current && slide3Ref.current && slide4Ref.current) {
      console.log('Refs initialized:', slide1Ref.current, slide2Ref.current, slide3Ref.current, slide4Ref.current);

      gsap.fromTo(
        slide1Ref.current,
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: slide1Ref.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        slide2Ref.current,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: slide2Ref.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        slide3Ref.current,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: slide3Ref.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        slide4Ref.current,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: slide4Ref.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
    } else {
      console.error('One or more refs are not initialized');
    }
  }, []);

  return (
    <div className="h-screen relative flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-red-500 to-green-500">
        <Canvas className="relative">
          <Galaxy />
        </Canvas>
        <div className="absolute top-24 flex flex-col justify-between  items-center" ref={slide1Ref}>
          <SlideOne />
          <JobTitle />
        </div>

        <div className='flex-col absolute items-center justify-center'>
          <FlipWordsDemo />
        </div>
        
        <Footer />
    </div>
      
    
  )
}

