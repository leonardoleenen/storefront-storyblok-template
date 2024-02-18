import { VariantType } from "./product";

export type LineItemType = {
  id: string;
  quantity: number;
  item: VariantType;
};

abstract class Cart {
  abstract addItem(item: VariantType, quantity: number): void;
}

class CartBuilder {
  private cart: Cart;

  constructor(cart: Cart) {
    this.cart = cart;
  }

  addItem(item: VariantType, quantity: number) {
    this.cart.addItem(item, quantity);
    return this;
  }

  buid(): Cart {
    return this.cart;
  }
}
