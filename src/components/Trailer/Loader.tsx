import { Html } from "@react-three/drei";

export const Loader = () => {
  return (
    <Html center>
      <span className="inline-block size-10 border-2 border-black/70 border-t-transparent rounded-full animate-spin" />
    </Html>
  );
};
