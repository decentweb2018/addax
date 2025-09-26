import type { Product } from "./ProductCard";

interface ProductCategory {
  id: string;
  name: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "roof-top",
    name: "Roof Top",
    products: [
      {
        id: "rooftop-tent",
        name: "ROOFTOP TENT",
        price: 1200,
        modelComponent: "tent",
      },
      {
        id: "rooftop-awning",
        name: "ROOFTOP AWNING",
        price: 450,
        modelComponent: "awning",
      },
      {
        id: "roof-rails",
        name: "ROOF RAILS",
        price: 250,
        modelComponent: "roof-rails",
      },
      {
        id: "solar-panels",
        name: "SOLAR PANELS",
        price: 1200,
        modelComponent: "solar-panels",
      },
      { id: "product-type-1", name: "PRODUCT TYPE", price: 150 },
      { id: "product-type-2", name: "PRODUCT TYPE", price: 200 },
      { id: "product-type-3", name: "PRODUCT TYPE", price: 300 },
      { id: "product-type-4", name: "PRODUCT TYPE", price: 175 },
      { id: "product-type-5", name: "PRODUCT TYPE", price: 225 },
      { id: "product-type-6", name: "PRODUCT TYPE", price: 275 },
    ],
  },
  {
    id: "sides",
    name: "Sides",
    products: [
      { id: "side-panel-1", name: "SIDE PANEL", price: 180 },
      { id: "side-panel-2", name: "SIDE PANEL", price: 220 },
      { id: "side-panel-3", name: "SIDE PANEL", price: 195 },
      { id: "side-panel-4", name: "SIDE PANEL", price: 210 },
      { id: "side-panel-5", name: "SIDE PANEL", price: 165 },
      { id: "side-panel-6", name: "SIDE PANEL", price: 240 },
    ],
  },
  {
    id: "color-decals",
    name: "Color and Decals",
    products: [
      { id: "color-option-1", name: "COLOR OPTION", price: 75 },
      { id: "color-option-2", name: "COLOR OPTION", price: 95 },
      { id: "color-option-3", name: "COLOR OPTION", price: 85 },
    ],
  },
  {
    id: "electronics",
    name: "Electronics",
    products: [
      { id: "electronic-1", name: "ELECTRONIC", price: 350 },
      { id: "electronic-2", name: "ELECTRONIC", price: 425 },
      { id: "electronic-3", name: "ELECTRONIC", price: 380 },
      { id: "electronic-4", name: "ELECTRONIC", price: 295 },
    ],
  },
  {
    id: "interior",
    name: "Interior",
    products: [
      { id: "interior-1", name: "INTERIOR ITEM", price: 120 },
      { id: "interior-2", name: "INTERIOR ITEM", price: 145 },
      { id: "interior-3", name: "INTERIOR ITEM", price: 110 },
      { id: "interior-4", name: "INTERIOR ITEM", price: 135 },
      { id: "interior-5", name: "INTERIOR ITEM", price: 160 },
    ],
  },
  {
    id: "wheels-tires",
    name: "Wheels & Tires",
    products: [
      { id: "wheel-1", name: "WHEEL TYPE", price: 800 },
      { id: "wheel-2", name: "WHEEL TYPE", price: 950 },
      { id: "wheel-3", name: "WHEEL TYPE", price: 720 },
    ],
  },
  {
    id: "accessories",
    name: "Accessories",
    products: [
      { id: "accessory-1", name: "ACCESSORY", price: 85 },
      { id: "accessory-2", name: "ACCESSORY", price: 110 },
      { id: "accessory-3", name: "ACCESSORY", price: 95 },
      { id: "accessory-4", name: "ACCESSORY", price: 125 },
    ],
  },
  {
    id: "storage",
    name: "Storage",
    products: [
      { id: "storage-1", name: "STORAGE ITEM", price: 200 },
      { id: "storage-2", name: "STORAGE ITEM", price: 275 },
      { id: "storage-3", name: "STORAGE ITEM", price: 225 },
    ],
  },
  {
    id: "lighting",
    name: "Lighting",
    products: [
      { id: "light-1", name: "LIGHT", price: 65 },
      { id: "light-2", name: "LIGHT", price: 85 },
      { id: "light-3", name: "LIGHT", price: 75 },
      { id: "light-4", name: "LIGHT", price: 95 },
    ],
  },
  {
    id: "safety",
    name: "Safety",
    products: [
      { id: "safety-1", name: "SAFETY ITEM", price: 150 },
      { id: "safety-2", name: "SAFETY ITEM", price: 180 },
      { id: "safety-3", name: "SAFETY ITEM", price: 165 },
    ],
  },
];
