import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";

function Terrain() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#1f2937" />
    </mesh>
  );
}

function Player() {
  return (
    <mesh position={[0, 1, 0]} castShadow>
      <capsuleGeometry args={[0.5, 1, 4, 8]} />
      <meshStandardMaterial color="#60a5fa" />
    </mesh>
  );
}

function Enemy() {
  return (
    <mesh position={[5, 1, -5]} castShadow>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#a855f7" emissive="#7c3aed" />
    </mesh>
  );
}

export default function App() {
  return (
    <div className="w-screen h-screen bg-black text-white overflow-hidden">
      <Canvas shadows camera={{ position: [0, 5, 10], fov: 60 }}>
        <Sky sunPosition={[100, 20, 100]} />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 15, 10]}
          intensity={2}
          castShadow
        />

        <Terrain />
        <Player />
        <Enemy />

        <OrbitControls />
      </Canvas>

      <div className="absolute top-5 left-5 bg-black/40 backdrop-blur-xl p-5 rounded-3xl border border-white/10">
        <h1 className="text-4xl font-black">Anime RPG Engine</h1>
        <p className="text-slate-300 mt-2">
          Open-world anime RPG prototype using React Three Fiber.
        </p>
      </div>

      <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
        <div className="space-y-3">
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-4 w-72">
            <div className="flex justify-between">
              <span>HP</span>
              <span>100 / 100</span>
            </div>

            <div className="h-4 bg-black/40 rounded-full overflow-hidden mt-2">
              <div className="h-4 bg-emerald-400 w-full" />
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-4 w-72">
            <div className="flex justify-between">
              <span>Energy</span>
              <span>80 / 100</span>
            </div>

            <div className="h-4 bg-black/40 rounded-full overflow-hidden mt-2">
              <div className="h-4 bg-cyan-400 w-4/5" />
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="w-20 h-20 rounded-full bg-orange-500 font-bold shadow-2xl">
            ATK
          </button>

          <button className="w-20 h-20 rounded-full bg-sky-500 font-bold shadow-2xl">
            SKL
          </button>

          <button className="w-20 h-20 rounded-full bg-violet-600 font-bold shadow-2xl">
            BST
          </button>
        </div>
      </div>
    </div>
  );
}
