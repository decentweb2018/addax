import type { GLTFData, ModelProps, TextureSet } from "@/types";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export const RooftopAwning = (props: ModelProps) => {
  const { nodes } = useGLTF("/Rooftop_Awning.glb") as unknown as GLTFData;

  const textures = useTexture({
    // Bag
    bagAlpha: "/Accessories/Rooftop_Awning/Bag_Alpha.png",
    bagBaseColor: "/Accessories/Rooftop_Awning/Bag_BaseColor.png",
    bagDisplacement: "/Accessories/Rooftop_Awning/Bag_Displacement.png",
    bagEmission: "/Accessories/Rooftop_Awning/Bag_Emission.png",
    bagMetallic: "/Accessories/Rooftop_Awning/Bag_Metallic.png",
    bagNormal: "/Accessories/Rooftop_Awning/Bag_Normal.png",
    bagRoughness: "/Accessories/Rooftop_Awning/Bag_Roughness.png",

    // Zipper
    zipperAlpha: "/Accessories/Rooftop_Awning/Zipper_Alpha.png",
    zipperBaseColor: "/Accessories/Rooftop_Awning/Zipper_BaseColor.png",
    zipperDisplacement: "/Accessories/Rooftop_Awning/Zipper_Displacement.png",
    zipperEmission: "/Accessories/Rooftop_Awning/Zipper_Emission.png",
    zipperMetallic: "/Accessories/Rooftop_Awning/Zipper_Metallic.png",
    zipperNormal: "/Accessories/Rooftop_Awning/Zipper_Normal.png",
    zipperRoughness: "/Accessories/Rooftop_Awning/Zipper_Roughness.png",

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

  const bagMaterial = new THREE.MeshStandardMaterial({
    map: textures.bagBaseColor,
    normalMap: textures.bagNormal,
    roughnessMap: textures.bagRoughness,
    metalnessMap: textures.bagMetallic,
    metalness: 0.1,
    roughness: 0.6,
  });

  const zipperMaterial = new THREE.MeshStandardMaterial({
    map: textures.zipperBaseColor,
    normalMap: textures.zipperNormal,
    roughnessMap: textures.zipperRoughness,
    metalnessMap: textures.zipperMetallic,
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

  return (
    <group {...props} dispose={null}>
      <group position={[0.251, 2.108, 0.001]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={zipperMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_1.geometry}
          material={bagMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_2.geometry}
          material={blackMetalMaterial}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/Rooftop_Awning.glb");
