import { Suspense } from "react";
import type { Product } from "../Menu/ProductCard";
import { Loader } from "./Loader";
import { RooftopAwning } from "./RooftopAwning";
import { RooftopTent } from "./RooftopTent";
import { Trailer } from "./Trailer";

interface Props {
  selectedProducts: Set<Product>;
}

export const TrailerContent = ({ selectedProducts }: Props) => {
  const isShowElement = (id: string) => {
    return Array.from(selectedProducts).some((item) => item.id === id);
  };

  return (
    <Suspense fallback={<Loader />}>
      <Trailer />
      {isShowElement("rooftop-tent") && <RooftopTent />}
      {isShowElement("rooftop-awning") && <RooftopAwning />}
    </Suspense>
  );
};
