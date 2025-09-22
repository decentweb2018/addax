import { Environment, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo, useState } from "react";
import { Preview } from "./Preview";
import { LandScapeContent } from "./components/LandScape";
import { Menu } from "./components/Menu";
import { SmoothCamera } from "./components/SmoothCamera";
import { TrailerContent } from "./components/Trailer";

export type TimeOfDay = "day" | "night";

function App() {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>("day");
  const [showTent, setShowTent] = useState(false);
  const [showAwning, setShowAwning] = useState(false);

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
      <Menu
        timeOfDay={timeOfDay}
        showTent={showTent}
        showAwning={showAwning}
        onChangeTimeOfDay={setTimeOfDay}
        onChangeShowTent={setShowTent}
        onChangeShowAwning={setShowAwning}
      />
      <Canvas shadows>
        <Suspense fallback={<Preview />}>
          <SmoothCamera showTent={showTent} showAwning={showAwning} />

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

          <LandScapeContent />

          <TrailerContent showAwning={showAwning} showTent={showTent} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
