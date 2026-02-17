"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, PerspectiveCamera, Html } from "@react-three/drei"
import { useState } from "react"

function GeneratorBuilding() {
  const [hovered, setHovered] = useState(false)

  return (
    <group>
      {/* Main Building */}
      <mesh position={[0, 0.5, 0]} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        <boxGeometry args={[2, 1, 3]} />
        <meshStandardMaterial color={hovered ? "#10b981" : "#0f766e"} metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 1.1, 0]}>
        <boxGeometry args={[2.2, 0.2, 3.2]} />
        <meshStandardMaterial color="#134e4a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Generator Units (4 units) */}
      {[-0.7, -0.23, 0.23, 0.7].map((zPos, idx) => (
        <group key={idx} position={[0, 0.3, zPos]}>
          <mesh>
            <cylinderGeometry args={[0.15, 0.15, 0.8, 16]} />
            <meshStandardMaterial color="#059669" metalness={0.9} roughness={0.1} />
          </mesh>
          {/* Exhaust pipes */}
          <mesh position={[0, 0.5, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.3, 8]} />
            <meshStandardMaterial color="#047857" metalness={0.7} roughness={0.3} />
          </mesh>
        </group>
      ))}

      {/* Door */}
      <mesh position={[-1.01, 0, 0.5]}>
        <boxGeometry args={[0.02, 0.6, 0.4]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>

      {/* Windows */}
      {[-0.5, 0.5].map((xPos, idx) => (
        <group key={idx}>
          <mesh position={[xPos > 0 ? 1.01 : -1.01, 0.5, 0]}>
            <boxGeometry args={[0.02, 0.3, 0.5]} />
            <meshStandardMaterial
              color="#0ea5e9"
              emissive="#0ea5e9"
              emissiveIntensity={0.3}
              transparent
              opacity={0.8}
            />
          </mesh>
        </group>
      ))}

      {/* Ground pad */}
      <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3, 4]} />
        <meshStandardMaterial color="#1e293b" roughness={0.9} />
      </mesh>

      {/* Info Label */}
      {hovered && (
        <Html position={[0, 1.5, 0]} center>
          <div className="bg-card/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-primary/30 text-xs whitespace-nowrap">
            <div className="font-bold text-primary">CHP Generation Facility</div>
            <div className="text-accent">4 x 2.5MW Units = 10MW</div>
          </div>
        </Html>
      )}
    </group>
  )
}

export default function Generator3D() {
  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden border border-primary/20 bg-gradient-to-b from-background to-secondary">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[4, 3, 5]} fov={50} />
        <OrbitControls
          enablePan={false}
          minDistance={3}
          maxDistance={10}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.2}
        />

        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <pointLight position={[-3, 3, -3]} intensity={0.5} color="#10b981" />

        {/* Environment */}
        <Environment preset="sunset" />

        {/* Generator Building */}
        <GeneratorBuilding />

        {/* Ground plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#0f172a" roughness={0.9} />
        </mesh>
      </Canvas>

      <div className="absolute bottom-4 left-4 bg-card/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-primary/20">
        <p className="text-xs text-accent">Drag to rotate • Scroll to zoom</p>
      </div>
    </div>
  )
}
