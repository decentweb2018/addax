import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import type { GLTFData, ModelProps, TextureSet } from "./types";

export function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF(
    "/BaseTrailer.glb"
  ) as unknown as GLTFData;

  const textures = useTexture({
    // Stainless Steel
    stainlessAlpha: "/Stainless/Stainless_Steel_Alpha.png",
    stainlessBaseColor: "/Stainless/Stainless_Steel_BaseColor.png",
    stainlessDisplacement: "/Stainless/Stainless_Steel_Displacement.png",
    stainlessEmission: "/Stainless/Stainless_Steel_Emission.png",
    stainlessMetallic: "/Stainless/Stainless_Steel_Metallic.png",
    stainlessNormal: "/Stainless/Stainless_Steel_Normal.png",
    stainlessRoughness: "/Stainless/Stainless_Steel_Roughness.png",

    // Trailer Metal
    trailerAlpha: "/Trailer/Trailer_Metal_Alpha.png",
    trailerBaseColor: "/Trailer/Trailer_Metal_BaseColor.png",
    trailerDisplacement: "/Trailer/Trailer_Metal_Displacement.png",
    trailerEmission: "/Trailer/Trailer_Metal_Emission.png",
    trailerMetallic: "/Trailer/Trailer_Metal_Metallic.png",
    trailerNormal: "/Trailer/Trailer_Metal_Normal.png",
    trailerRoughness: "/Trailer/Trailer_Metal_Roughness.png",

    // Black Metal
    blackMetalAlpha: "/BlackMetal/Black_Metal_Alpha.png",
    blackMetalBaseColor: "/BlackMetal/Black_Metal_BaseColor.png",
    blackMetalDisplacement: "/BlackMetal/Black_Metal_Displacement.png",
    blackMetalEmission: "/BlackMetal/Black_Metal_Emission.png",
    blackMetalMetallic: "/BlackMetal/Black_Metal_Metallic.png",
    blackMetalNormal: "/BlackMetal/Black_Metal_Normal.png",
    blackMetalRoughness: "/BlackMetal/Black_Metal_Roughness.png",

    // Tire Material
    tireAlpha: "/Tire Material/Tire_Alpha.png",
    tireBaseColor: "/Tire Material/Tire_BaseColor.png",
    tireDisplacement: "/Tire Material/Tire_Displacement.png",
    tireEmission: "/Tire Material/Tire_Emission.png",
    tireMetallic: "/Tire Material/Tire_Metallic.png",
    tireNormal: "/Tire Material/Tire_Normal.png",
    tireRoughness: "/Tire Material/Tire_Roughness.png",

    // Rim Material
    rimAlpha: "/Rims/Rim_Alpha.png",
    rimBaseColor: "/Rims/Rim_BaseColor.png",
    rimDisplacement: "/Rims/Rim_Displacement.png",
    rimEmission: "/Rims/Rim_Emission.png",
    rimMetallic: "/Rims/Rim_Metallic.png",
    rimNormal: "/Rims/Rim_Normal.png",
    rimRoughness: "/Rims/Rim_Roughness.png",

    // Propane Tank
    propaneAlpha: "/PropaneTank/5lb_Propane_Tank_Alpha.png",
    propaneBaseColor: "/PropaneTank/5lb_Propane_Tank_BaseColor.png",
    propaneDisplacement: "/PropaneTank/5lb_Propane_Tank_Displacement.png",
    propaneEmission: "/PropaneTank/5lb_Propane_Tank_Emission.png",
    propaneMetallic: "/PropaneTank/5lb_Propane_Tank_Metallic.png",
    propaneNormal: "/PropaneTank/5lb_Propane_Tank_Normal.png",
    propaneRoughness: "/PropaneTank/5lb_Propane_Tank_Roughness.png",
  }) as TextureSet;

  Object.entries(textures).forEach(([key, tex]) => {
    if (!tex) return;
    tex.flipY = false;
    if (key.toLowerCase().includes("basecolor")) {
      tex.colorSpace = THREE.SRGBColorSpace;
    }
  });

  const stainlessSteelMaterial = new THREE.MeshStandardMaterial({
    map: textures.stainlessBaseColor,
    normalMap: textures.stainlessNormal,
    roughnessMap: textures.stainlessRoughness,
    metalnessMap: textures.stainlessMetallic,
    metalness: 0.9,
    roughness: 0.2,
  });

  const trailerMetalMaterial = new THREE.MeshStandardMaterial({
    map: textures.trailerBaseColor,
    normalMap: textures.trailerNormal,
    roughnessMap: textures.trailerRoughness,
    metalnessMap: textures.trailerMetallic,
    metalness: 0.8,
    roughness: 0.3,
  });

  const blackMetalMaterial = new THREE.MeshStandardMaterial({
    map: textures.blackMetalBaseColor,
    normalMap: textures.blackMetalNormal,
    roughnessMap: textures.blackMetalRoughness,
    metalnessMap: textures.blackMetalMetallic,
    metalness: 0.9,
    roughness: 0.1,
  });

  const tireMaterial = new THREE.MeshStandardMaterial({
    map: textures.tireBaseColor,
    normalMap: textures.tireNormal,
    roughnessMap: textures.tireRoughness,
    metalnessMap: textures.tireMetallic,
    metalness: 0.1,
    roughness: 0.8,
  });

  const rimMaterial = new THREE.MeshStandardMaterial({
    map: textures.rimBaseColor,
    normalMap: textures.rimNormal,
    roughnessMap: textures.rimRoughness,
    metalnessMap: textures.rimMetallic,
    metalness: 0.7,
    roughness: 0.2,
  });

  const propaneTankMaterial = new THREE.MeshStandardMaterial({
    map: textures.propaneBaseColor,
    normalMap: textures.propaneNormal,
    roughnessMap: textures.propaneRoughness,
    metalnessMap: textures.propaneMetallic,
    metalness: 0.3,
    roughness: 0.4,
  });

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.546, -0.169]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={trailerMetalMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={stainlessSteelMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials["Trailer Top Felt Graphic"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_3.geometry}
          material={blackMetalMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_4.geometry}
          material={tireMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_5.geometry}
          material={rimMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_6.geometry}
          material={materials["Black Plastic"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_7.geometry}
          material={stainlessSteelMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_8.geometry}
          material={materials["Black Rubber"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_9.geometry}
          material={materials["Blue Plastic"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_10.geometry}
          material={materials.Brass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_11.geometry}
          material={materials["Brake Lights"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_12.geometry}
          material={propaneTankMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_13.geometry}
          material={materials.Side_Light}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_14.geometry}
          material={materials.Emission}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/BaseTrailer.glb");
