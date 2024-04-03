import './index.css';
import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { useSpring, animated } from '@react-spring/three';
import ThreeTextComponent from './ThreeFont';

function Cube(props) {
  const mesh = useRef()
  const [hover, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const { scale } = useSpring({ scale: active ? 1.5 : 1 })
  return (
    <animated.mesh
      ref={mesh}
      onPointerEnter={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      onClick={(event) => setActive(!active)}
      scale={scale}
      {...props}
    >
      <boxGeometry args={[1, 0.1, 1]} />
      <meshStandardMaterial color={hover ? "hotpink" : "orange"} />
    </animated.mesh>
  )
}

function App() {
  return (
    <>
    {/* <Canvas>
      <ambientLight intensity={3} />
      <OrbitControls />
      <Cube position={[-1.2, 0, 0]} />
      <Cube position={[1.2, 0, 0]} />
    </Canvas> */}
    <ThreeTextComponent />
    </>
    
  );
}

export default App;
