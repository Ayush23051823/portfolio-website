
import { Moon} from "./Moon";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment} from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import HeroLights from "./HeroLights";
import Particles from "./Particles";


const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 720px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas camera={{ position: [0, 2, 10], fov: 45}}
            gl={{logarithmicDepthBuffer: true}}>
    
      <OrbitControls
        enableZoom={!isTablet}
        maxDistance={400}
        minDistance={350}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />

      <HeroLights/>

      <Particles count={500}/>
      <Particles position={[0, 0, 0]} renderOrder={1} />
      <Moon renderOrder={0} />
      <Particles renderOrder={1} />
      

      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, 0, 0]}
        rotation={[0, -Math.PI/4, 0]}
        >

      <OrbitControls />
      <Environment preset="sunset" />
      
      </group>
        <Moon/>
    </Canvas>
  );
};

export default HeroExperience;