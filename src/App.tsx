import { Environment, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo, useState } from "react";
import { Preview } from "./Preview";
import { LandScapeContent } from "./components/LandScape";
import { Menu, TrailerMenu } from "./components/Menu";
import type { Product } from "./components/Menu/ProductCard";
import { SmoothCamera } from "./components/SmoothCamera";
import { TrailerContent } from "./components/Trailer";

export type TimeOfDay = "day" | "night";

function App() {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>("day");
  const [selectedProducts, setSelectedProducts] = useState<Set<Product>>(
    new Set()
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const toggleProduct = (product: Product) => {
    setSelectedProducts((prev) => {
      const newSet = new Set(prev);
      const existingProduct = Array.from(newSet).find(
        (p) => p.id === product.id
      );

      if (existingProduct) {
        newSet.delete(existingProduct);
      } else {
        newSet.add(product);
      }

      return newSet;
    });
  };

  const selectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

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
    <div className="h-screen w-screen relative">
      <Menu timeOfDay={timeOfDay} onChangeTimeOfDay={setTimeOfDay} />
      <TrailerMenu
        selectedProducts={selectedProducts}
        onProductToggle={toggleProduct}
        onCategorySelect={selectCategory}
      />
      <div className="h-full w-full">
        <Canvas shadows>
          <Suspense fallback={<Preview />}>
            <SmoothCamera selectedCategory={selectedCategory} />

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

            <TrailerContent selectedProducts={selectedProducts} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
