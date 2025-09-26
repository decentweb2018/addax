import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";

type CameraPosition = Record<
  string,
  { position: [number, number, number]; lookAt: [number, number, number] }
>;

const CAMERA_POSITIONS: CameraPosition = {
  default: { position: [4.5, 2, 6.8], lookAt: [0, 1.0, 0] },
  "roof-top": {
    position: [4.2, 3.6, 5.6],
    lookAt: [0, 1.8, 0],
  },
  sides: { position: [6.5, 2.5, 2.0], lookAt: [0, 1.2, 0] },
  "wheels-tires": {
    position: [4.5, 1.2, 6.8],
    lookAt: [0, 0.5, 0],
  },
  "color-decals": {
    position: [5.5, 2.5, 4.0],
    lookAt: [0, 1.5, 0],
  },
  electronics: {
    position: [7.0, 2.0, 3.0],
    lookAt: [0, 1.0, 0],
  },
  interior: {
    position: [4.0, 3.0, 5.0],
    lookAt: [0, 1.5, 0],
  },
  accessories: {
    position: [5.0, 2.2, 5.5],
    lookAt: [0, 1.2, 0],
  },
  storage: { position: [3.5, 2.5, 7.5], lookAt: [0, 1.0, 0] },
  lighting: {
    position: [4.2, 3.2, 5.8],
    lookAt: [0, 1.6, 0],
  },
  safety: { position: [4.8, 2.3, 6.2], lookAt: [0, 1.1, 0] },
};

interface Props {
  selectedCategory: string;
}

export function SmoothCamera({ selectedCategory }: Props) {
  const { camera } = useThree();
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const targetPosition = useRef(new THREE.Vector3(4.5, 2, 6.8));
  const targetLookAt = useRef(new THREE.Vector3(0, 1.0, 0));
  const isInitialized = useRef(false);

  useFrame((_, delta) => {
    if (!controlsRef.current) return;

    if (!isInitialized.current) {
      camera.position.set(4.5, 2, 6.8);
      controlsRef.current.target.set(0, 1.0, 0);
      isInitialized.current = true;
    }

    const cameraConfig =
      selectedCategory && selectedCategory in CAMERA_POSITIONS
        ? CAMERA_POSITIONS[selectedCategory]
        : CAMERA_POSITIONS.default;

    targetPosition.current.set(...cameraConfig.position);
    targetLookAt.current.set(...cameraConfig.lookAt);

    // Плавное перемещение камеры
    const lerpFactor = Math.min(delta * 3, 1);
    camera.position.lerp(targetPosition.current, lerpFactor);

    // Плавное перемещение target для OrbitControls
    const currentTarget = controlsRef.current.target;
    currentTarget.lerp(targetLookAt.current, lerpFactor);
    controlsRef.current.update();
  });

  return (
    <>
      <PerspectiveCamera makeDefault fov={40} />

      <OrbitControls
        ref={controlsRef}
        minDistance={3.5}
        maxDistance={9.5}
        enablePan={false}
        maxPolarAngle={Math.PI / 2 - 0.01}
      />
    </>
  );
}
