import { Html, useProgress } from "@react-three/drei";

export const Preview = () => {
  const { progress } = useProgress();

  return (
    <Html fullscreen>
      <div className="absolute inset-0 z-20 flex items-center justify-center bg-black">
        <img
          src="/Preview.jpg"
          alt="Preview"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="text-white text-4xl md:text-6xl font-bold tracking-[0.3em]">
            ADDAX
          </div>
          <div className="flex items-center gap-3 text-white/90 text-sm">
            <span className="inline-block size-4 border-2 border-white/70 border-t-transparent rounded-full animate-spin" />
            <span>{progress.toFixed(0)}% loaded</span>
          </div>
        </div>
      </div>
    </Html>
  );
};
