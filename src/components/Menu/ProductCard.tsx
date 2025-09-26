import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export interface Product {
  id: string;
  name: string;
  price: number;
  inStock?: boolean;
  modelComponent?: string;
}

interface Props {
  product: Product;
  isSelected: boolean;
  onToggle: () => void;
}

export const ProductCard = ({ product, isSelected, onToggle }: Props) => {
  const isOutOfStock = product.inStock === false;

  return (
    <div
      className={cn(
        "relative group",
        isOutOfStock ? "opacity-60" : "cursor-pointer"
      )}
      onClick={() => !isOutOfStock && onToggle()}
    >
      <div className="absolute top-2 left-2 z-10">
        <Checkbox
          checked={isSelected}
          disabled={isOutOfStock}
          className="bg-white/80 border-gray-300"
        />
      </div>

      {isOutOfStock && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20">
          <span className="bg-gray-800 text-white px-2 py-1 text-xs font-medium">
            Out of Stock
          </span>
        </div>
      )}

      <div className="aspect-square bg-gray-300 mb-2 flex items-center justify-center">
        <span className="text-gray-500 text-xs text-center px-2">
          {product.name}
        </span>
      </div>

      <div className="text-left space-y-1">
        <h3 className="font-semibold text-black text-xs leading-tight">
          {product.name}
        </h3>
        <p className="text-black text-xs">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};
