export type Money = {
  amount: number;
  cents: number;
  fraction: number;
  currencySymbol: string;
};

export type ProductImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Category = {
  id: string;
  name: string;
  description: string;
};

export type Collection = {
  id: string;
  name: string;
  description: string;
  products: ProductType[];
  attributes: Record<string, unknown>;
};

export type Variant = {
  id: string;
  sku: string;
  description: string; //Could be a markdown text
  price: Money;
  slug?: string;
  attributes?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
  images: ProductImage[];
};

export type ProductType = {
  id: string;
  variants: Variant[];
  categories: Category[];
  title: string;
  subtitle: string;
  description: string;
};
