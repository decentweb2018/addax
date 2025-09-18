import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Sky,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo, useState } from "react";
import { Label } from "./components/ui/label";
import { Switch } from "./components/ui/switch";
import { GroundPlane } from "./GroudPlane";
import { Model } from "./Model";

export type TimeOfDay = "day" | "night";

function App() {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>("day");

  const lighting = useMemo(() => {
    return timeOfDay === "day"
      ? {
          ambient: 1.2,
          dir: 2.2,
          env: "sunset" as const,
          sun: [150, 30, 150] as [number, number, number],
          skyTurbidity: 2,
          skyRayleigh: 1,
          dirColor: "#ffffff",
          exposure: 1.0,
        }
      : {
          ambient: 0.7,
          dir: 1.5,
          env: "night" as const,
          sun: [-50, -20, -50] as [number, number, number],
          skyTurbidity: 4,
          skyRayleigh: 0.5,
          dirColor: "#aab4ff",
          exposure: 0.75,
        };
  }, [timeOfDay]);

  return (
    <div className="flex h-screen w-screen relative">
      <div className="absolute z-10 m-4 rounded-md bg-white/80 backdrop-blur px-3 py-2 space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <Switch
            id="daynight"
            checked={timeOfDay === "night"}
            onCheckedChange={(v) => setTimeOfDay(v ? "night" : "day")}
          />
          <Label htmlFor="daynight">Ночь</Label>
        </div>
      </div>

      <Canvas shadows>
        <PerspectiveCamera makeDefault fov={40} position={[4.2, 3.6, 5.6]} />
        <ambientLight intensity={lighting.ambient} />
        <directionalLight
          position={[10, 15, 10]}
          intensity={lighting.dir}
          color={lighting.dirColor}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <Environment preset={lighting.env} />
        <Sky
          turbidity={lighting.skyTurbidity}
          rayleigh={lighting.skyRayleigh}
          inclination={0.52}
          azimuth={0.25}
          sunPosition={lighting.sun}
        />

        <group>
          <GroundPlane />
        </group>

        <Suspense fallback={null}>
          <Model />
        </Suspense>

        <OrbitControls
          minDistance={3.5}
          maxDistance={9.5}
          enablePan={false}
          maxPolarAngle={Math.PI / 2 - 0.01}
          target={[0, 1.8, 0]}
        />
      </Canvas>
    </div>
  );
}

export default App;
