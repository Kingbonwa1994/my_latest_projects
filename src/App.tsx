import { Canvas } from "@react-three/fiber";
import { Galaxy } from "./components/Galaxy";


export default function App() {
  return (
    <div className="h-screen">
        <Canvas className="h-"><Galaxy /></Canvas>
    </div>
      
    
  )
}
