interface CartActions {
  getCart(): CartType;
  addItem(item: CartItemType): void;
  removeItem(item: CartItemType): void;
}

type CartItemType = {};

type CartType = {
  items: Array<CartItemType>;
};
