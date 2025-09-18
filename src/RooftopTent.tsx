import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import type { GLTFData, ModelProps, TextureSet } from "./types";

export function RooftopTent(props: ModelProps) {
  const { nodes, materials } = useGLTF(
    "/Rooftop_Tent.glb"
  ) as unknown as GLTFData;

  const textures = useTexture({
    // Rooftop Tent
    tentAlpha: "/RooftopTent/Rooftop_Tent_Alpha.png",
    tentBaseColor: "/RooftopTent/Rooftop_Tent_BaseColor.png",
    tentDisplacement: "/RooftopTent/Rooftop_Tent_Displacement.png",
    tentEmission: "/RooftopTent/Rooftop_Tent_Emission.png",
    tentMetallic: "/RooftopTent/Rooftop_Tent_Metallic.png",
    tentNormal: "/RooftopTent/Rooftop_Tent_Normal.png",
    tentRoughness: "/RooftopTent/Rooftop_Tent_Roughness.png",

    // Stainless Steel
    stainlessAlpha: "/Stainless/Stainless_Steel_Alpha.png",
    stainlessBaseColor: "/Stainless/Stainless_Steel_BaseColor.png",
    stainlessDisplacement: "/Stainless/Stainless_Steel_Displacement.png",
    stainlessEmission: "/Stainless/Stainless_Steel_Emission.png",
    stainlessMetallic: "/Stainless/Stainless_Steel_Metallic.png",
    stainlessNormal: "/Stainless/Stainless_Steel_Normal.png",
    stainlessRoughness: "/Stainless/Stainless_Steel_Roughness.png",

    // Black Metal
    blackMetalAlpha: "/BlackMetal/Black_Metal_Alpha.png",
    blackMetalBaseColor: "/BlackMetal/Black_Metal_BaseColor.png",
    blackMetalDisplacement: "/BlackMetal/Black_Metal_Displacement.png",
    blackMetalEmission: "/BlackMetal/Black_Metal_Emission.png",
    blackMetalMetallic: "/BlackMetal/Black_Metal_Metallic.png",
    blackMetalNormal: "/BlackMetal/Black_Metal_Normal.png",
    blackMetalRoughness: "/BlackMetal/Black_Metal_Roughness.png",
  }) as TextureSet;

  Object.entries(textures).forEach(([key, tex]) => {
    if (!tex) return;
    tex.flipY = false;
    if (key.toLowerCase().includes("basecolor")) {
      tex.colorSpace = THREE.SRGBColorSpace;
    }
  });

  const tentMaterial = new THREE.MeshStandardMaterial({
    map: textures.tentBaseColor,
    normalMap: textures.tentNormal,
    roughnessMap: textures.tentRoughness,
    metalnessMap: textures.tentMetallic,
    metalness: 0.1,
    roughness: 0.7,
  });

  const stainlessSteelMaterial = new THREE.MeshStandardMaterial({
    map: textures.stainlessBaseColor,
    normalMap: textures.stainlessNormal,
    roughnessMap: textures.stainlessRoughness,
    metalnessMap: textures.stainlessMetallic,
    metalness: 0.9,
    roughness: 0.2,
  });

  const blackMetalMaterial = new THREE.MeshStandardMaterial({
    map: textures.blackMetalBaseColor,
    normalMap: textures.blackMetalNormal,
    roughnessMap: textures.blackMetalRoughness,
    metalnessMap: textures.blackMetalMetallic,
    metalness: 0.9,
    roughness: 0.1,
  });

  return (
    <group {...props} dispose={null}>
      <group position={[-0.619, 1.692, 0.004]} scale={[-0.022, -0.045, -0.035]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube052.geometry}
          material={blackMetalMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube052_1.geometry}
          material={stainlessSteelMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube052_2.geometry}
          material={tentMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube052_3.geometry}
          material={materials["White Plastic"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube052_4.geometry}
          material={blackMetalMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube052_5.geometry}
          material={materials["Black Plastic"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube052_6.geometry}
          material={stainlessSteelMaterial}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Rooftop_Tent.glb");
