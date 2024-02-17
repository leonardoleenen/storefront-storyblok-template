export type MoneyType = {
  amountInCents: number;
  currency: string;
  presicion: number;
};

export type ProductType = {
  id: string;
  variants?: VariantType[];
};

export type VariantType = {
  id: string;
  sku?: string;
  price: MoneyType;
};
