import { Canvas } from "@react-three/fiber";
import { Galaxy } from "./components/Galaxy";
import SlideOne from "./components/slide1";



export default function App() {
  return (
    <div className="h-screen relative flex items-center justify-center">
        <Canvas className="relative"><Galaxy /></Canvas>
        <div className="absolute top-24 justify-center"><SlideOne /></div>
        
    </div>
      
    
  )
}
