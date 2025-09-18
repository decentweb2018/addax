import * as THREE from "three";

export interface GLTFNode extends THREE.Object3D {
  geometry: THREE.BufferGeometry;
}

export interface GLTFMaterial extends THREE.Material {
  [key: string]: unknown;
}

export interface GLTFResult {
  nodes: Record<string, GLTFNode>;
  materials: Record<string, GLTFMaterial>;
}

export interface ModelProps {
  [key: string]: unknown;
}

export interface TextureSet {
  [key: string]: THREE.Texture;
}

export type GLTFData = {
  nodes: Record<string, THREE.Object3D & { geometry: THREE.BufferGeometry }>;
  materials: Record<string, THREE.Material>;
  [key: string]: unknown;
};
