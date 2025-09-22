import type { GLTFData, ModelProps } from "@/types";
import { useGLTF } from "@react-three/drei";

export const Log = (props: ModelProps) => {
  const { nodes, materials } = useGLTF("/Log.glb") as unknown as GLTFData;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TreeLog008_LOD1001.geometry}
        material={materials.TreeLog008_4K}
        position={[1.939, -0.089, -1.695]}
        rotation={[-Math.PI / 2, 0, 1.522]}
        scale={100}
      />
    </group>
  );
};

useGLTF.preload("/Log.glb");
