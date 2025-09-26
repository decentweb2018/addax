import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { ProductCard, type Product } from "./ProductCard";
import { productCategories } from "./mock";

interface Props {
  selectedProducts: Set<Product>;
  onProductToggle: (product: Product) => void;
  onCategorySelect: (categoryId: string) => void;
}

export const TrailerMenu = ({
  selectedProducts,
  onProductToggle,
  onCategorySelect,
}: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const totalCost = Array.from(selectedProducts).reduce((total, product) => {
    return total + product.price;
  }, 0);

  const formatCost = (cost: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(cost);
  };

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={cn(
          "fixed top-8 z-50 w-12 h-12 bg-transparent border-2 border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 ease-in-out",
          isMenuOpen ? "right-[32rem]" : "right-4"
        )}
      >
        {isMenuOpen ? (
          <ChevronRight className="w-6 h-6 text-white" />
        ) : (
          <ChevronLeft className="w-6 h-6 text-white" />
        )}
      </button>

      <div
        className={cn(
          "fixed right-12 top-8 bottom-8 w-[28rem] bg-white/95 backdrop-blur-sm border-l border-gray-200 shadow-2xl z-50 transition-all duration-300 ease-in-out overflow-hidden select-none flex flex-col",
          isMenuOpen ? "translate-x-0" : "translate-x-[calc(100%+3rem)]"
        )}
      >
        <div className="px-6 py-6 border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-10">
          <div>
            <h1 className="text-2xl font-bold text-black tracking-tight">
              Trailer Customizer
            </h1>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto min-h-0">
          <div className="px-6 py-2">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              onValueChange={(value) => onCategorySelect(value)}
            >
              {productCategories.map((category) => (
                <AccordionItem
                  key={category.id}
                  value={category.id}
                  className="border-b border-gray-100"
                >
                  <AccordionTrigger className="py-4 text-left hover:no-underline">
                    <span className="font-medium text-sm text-black">
                      {category.name}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="overflow-y-auto">
                      <div className="grid grid-cols-3 gap-4">
                        {category.products.map((product) => (
                          <ProductCard
                            key={product.id}
                            product={product}
                            isSelected={Array.from(selectedProducts).some(
                              (selected) => selected.id === product.id
                            )}
                            onToggle={() => onProductToggle(product)}
                          />
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="border-t border-gray-200 bg-gray-50 px-6 py-5 flex-shrink-0">
          <div className="flex items-center justify-between">
            <span className="text-black font-medium text-sm">Trailer Cost</span>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-black">
                {formatCost(totalCost)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
