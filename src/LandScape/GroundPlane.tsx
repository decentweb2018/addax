import type { GLTFData, ModelProps } from "@/types";
import { useGLTF } from "@react-three/drei";

export const GroundPlane = (props: ModelProps) => {
  const { nodes, materials } = useGLTF(
    "/Ground_Plane.glb"
  ) as unknown as GLTFData;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Ground_Plane.geometry}
        material={materials.GroundSand005_2K}
        position={[0, -0.153, 0]}
        rotation={[0, Math.PI / 4, 0]}
      />
    </group>
  );
};

useGLTF.preload("/Ground_Plane.glb");
