'use client'

import React, { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Html,
  Environment,
  ContactShadows,
  useGLTF,
  GizmoHelper,
  GizmoViewport,
  Gltf
} from '@react-three/drei'

/**
 * Floating 3D model component
 */
function FloatingModel({ modelPath = '/models/laptop.glb' }: { modelPath?: string }) {
  const group = useRef<THREE.Group>(null!)

  interface GLTFResult {
  scene: THREE.Group
  nodes: Record<string, THREE.Object3D>
  materials: Record<string, THREE.Material>
  animations: THREE.AnimationClip[]
}

const gltf = useGLTF(modelPath) as unknown as GLTFResult

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    // Floating animation
    group.current.position.y = 0.2 + Math.sin(t * 0.8) * 0.06
    // Rotation animation
    group.current.rotation.y += delta * 0.2
  })

  return (
    <group ref={group} dispose={null} position={[0, -0.2, 0]} scale={[.1,.1,.1]}>
      <primitive object={gltf.scene} />
    </group>
  )
}

/**
 * Fallback 3D orb loader (when model is loading or missing)
 */
function ModelFallback() {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.6
      ref.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.2) * 0.08
    }
  })

  return (
    <group>
      <mesh ref={ref} position={[0, 0, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.6} />
      </mesh>
      <Html center style={{ color: 'white', fontSize: 14 }}>
        Loading...
      </Html>
    </group>
  )
}

/**
 * HeroCanvas — used in HeroSection (3D laptop scene)
 */
export default function HeroCanvas() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0.8, 2.2], fov: 35 }}
      style={{ width: '100%', height: '100%' }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[2, 4, 2]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <spotLight position={[-5, 5, 5]} angle={0.2} intensity={0.6} />

      {/* Suspense while loading */}
      <Suspense fallback={<ModelFallback />}>
        <Environment preset="studio" />
        <FloatingModel modelPath="/models/laptop.glb" />
        <ContactShadows position={[0, -0.35, 0]} opacity={0.1} scale={0.5} blur={0} far={0.8} />
      </Suspense>

      {/* Debug helper (remove in production) */}
      <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
        <GizmoViewport />
      </GizmoHelper>
    </Canvas>
  )
}

// ✅ Optional optimization — preload model for faster load time
useGLTF.preload('/models/laptop.glb')
