import { useEffect, useRef } from 'react';
import { Canvas } from "@react-three/fiber";
import { Galaxy } from "./components/Galaxy";
import SlideOne from "./components/slide1";
import * as gsap  from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



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
    <div className="h-screen relative flex items-center justify-center">
        <Canvas className="relative"><Galaxy /></Canvas>
        <div className="absolute top-24 justify-center"><SlideOne /></div>
        <div className="slide" ref={slide1Ref}>
        {/* Slide 1 content */}
      </div>
      <div className="slide" ref={slide2Ref}>
        {/* Slide 2 content */}
      </div>
      <div className="slide" ref={slide3Ref}>
        {/* Slide 3 content */}
      </div>
      <div className="slide" ref={slide4Ref}>
        {/* Slide 4 content */}
      </div>
        
    </div>
      
    
  )
}

