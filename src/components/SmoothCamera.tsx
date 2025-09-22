import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";

interface SmoothCameraProps {
  showTent: boolean;
  showAwning: boolean;
}

export function SmoothCamera({ showTent, showAwning }: SmoothCameraProps) {
  const { camera } = useThree();
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const targetPosition = useRef(new THREE.Vector3(4.5, 2, 6.8));
  const targetLookAt = useRef(new THREE.Vector3(0, 1.0, 0));
  const isInitialized = useRef(false);

  useFrame((_, delta) => {
    if (!controlsRef.current) return;

    // Инициализация камеры при первом рендере
    if (!isInitialized.current) {
      camera.position.set(4.5, 2, 6.8);
      controlsRef.current.target.set(0, 1.0, 0);
      isInitialized.current = true;
    }

    // Обновляем целевые позиции в зависимости от состояния
    if (showTent || showAwning) {
      targetPosition.current.set(4.2, 3.6, 5.6);
      targetLookAt.current.set(0, 1.8, 0);
    } else {
      targetPosition.current.set(4.5, 2, 6.8);
      targetLookAt.current.set(0, 1.0, 0);
    }

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
