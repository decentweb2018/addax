import { Suspense } from "react";
import { Loader } from "./Loader";
import { RooftopAwning } from "./RooftopAwning";
import { RooftopTent } from "./RooftopTent";
import { Trailer } from "./Trailer";

interface Props {
  showTent: boolean;
  showAwning: boolean;
}

export const TrailerContent = ({ showAwning, showTent }: Props) => {
  return (
    <Suspense fallback={<Loader />}>
      <Trailer />
      {showAwning && <RooftopAwning />}
      {showTent && <RooftopTent />}
    </Suspense>
  );
};
