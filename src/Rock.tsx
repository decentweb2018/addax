import { useGLTF } from "@react-three/drei";
import type { GLTFData, ModelProps } from "./types";

export function Rock(props: ModelProps) {
  const { nodes, materials } = useGLTF("/Rock.glb") as unknown as GLTFData;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RockBeachLarge010_LOD1002.geometry}
        material={materials.RockBeachLarge010_4K}
        position={[-5, -1, -10]}
        rotation={[-3.04, 0.0, -3.04]}
        scale={[4, 4, 4]}
      />
    </group>
  );
}

useGLTF.preload("/Rock.glb");
