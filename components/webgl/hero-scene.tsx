"use client";

import * as React from "react";
import * as THREE from "three";

// Lazy load react-three-fiber to avoid SSR issues
let Canvas: any;
let useFrame: any;

if (typeof window !== "undefined") {
  try {
    const r3f = require("@react-three/fiber");
    Canvas = r3f.Canvas;
    useFrame = r3f.useFrame;
  } catch (e) {
    console.warn("Failed to load @react-three/fiber", e);
  }
}

function OrbitalRings() {
  const ring1Ref = React.useRef<THREE.Mesh>(null);
  const ring2Ref = React.useRef<THREE.Mesh>(null);
  const ring3Ref = React.useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ring1Ref.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = state.clock.elapsedTime * 0.3;
      ring2Ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = state.clock.elapsedTime * 0.25;
      ring3Ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group>
      {/* Outer ring - cyan/blue */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2, 0.05, 16, 100]} />
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.4} />
      </mesh>
      {/* Middle ring - blue */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[1.5, 0.04, 16, 100]} />
        <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={0.3} />
      </mesh>
      {/* Inner ring - light blue */}
      <mesh ref={ring3Ref}>
        <torusGeometry args={[1, 0.03, 16, 100]} />
        <meshStandardMaterial color="#93c5fd" emissive="#93c5fd" emissiveIntensity={0.2} />
      </mesh>
      {/* Center sphere */}
      <mesh>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial color="#dbeafe" emissive="#dbeafe" emissiveIntensity={0.8} />
      </mesh>
    </group>
  );
}

function HeroSceneContent() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <pointLight position={[-10, -10, -10]} intensity={0.6} color="#3b82f6" />
      <OrbitalRings />
    </>
  );
}

export function HeroScene() {
  const [hasWebGL, setHasWebGL] = React.useState(false);
  const [hasR3F, setHasR3F] = React.useState(false);

  React.useEffect(() => {
    // Check for WebGL support
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    const webglSupported = !!gl;
    
    // Check if react-three-fiber loaded
    const r3fLoaded = typeof Canvas !== "undefined" && typeof useFrame !== "undefined";
    
    setHasWebGL(webglSupported);
    setHasR3F(r3fLoaded);
  }, []);

  if (!hasWebGL || !hasR3F || !Canvas) {
    return <HeroFallback />;
  }

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        className="w-full h-full"
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <HeroSceneContent />
      </Canvas>
    </div>
  );
}

function HeroFallback() {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
      <svg
        className="w-full h-full"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="gradient" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0a0a0f" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="150" stroke="#3b82f6" strokeWidth="2" fill="url(#gradient)" opacity="0.25" />
        <circle cx="200" cy="200" r="100" stroke="#60a5fa" strokeWidth="2" fill="none" opacity="0.3" />
        <circle cx="200" cy="200" r="50" stroke="#93c5fd" strokeWidth="2" fill="none" opacity="0.4" />
        <circle cx="200" cy="200" r="5" fill="#dbeafe" />
      </svg>
    </div>
  );
}
