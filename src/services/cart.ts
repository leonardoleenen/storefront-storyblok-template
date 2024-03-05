import { AddressType, CalculationCartType, CartPaymentStatusType, ContactInfoType, CustomerType, DiscountType, PaymentSessionStatusType, PaymentSessionType, PaymentType, ShippingMethodType, TaxType, VariantType } from "@/model";

abstract class Cart {
  abstract get(): void;
  /* The `abstract addItem(item: VariantType, quantity: number): void;` method in the `Cart` abstract
	class is defining a method signature without providing an implementation. This means that any class
	that extends the `Cart` class must implement this `addItem` method with the specified parameters
	(item of type `VariantType` and quantity of type `number`) and return type `void`. This enforces
	that any subclass of `Cart` must provide its own implementation of the `addItem` method. */
  abstract add_item(item: VariantType, quantity: number): void;

  abstract remove_item(itemId: string): void;
  abstract update_item(itemId: string, quantity: number): void;
  abstract create_payment_session(payment: PaymentType, status: typeof PaymentSessionStatusType): void;

  abstract set_shipping_address(address: AddressType): void;
  abstract set_billing_address(address: AddressType): void;
  abstract set_shipping_method(method: ShippingMethodType): void;
  abstract redeem_discount(code: string): void;
  abstract remove_discount(code: string): void;
  abstract submit_order(): void;
  abstract clear_cart_session(): void;
}

class CartBuilder {
  private cart: Cart;
  protected cartType: "draft" | "swap" | "claim" | "draftOrder" = "draft";
  public contactInfo: ContactInfoType | null = null;
  protected customer: CustomerType | null = null;
  protected shipping_address: AddressType | null = null;
  protected billing_address: AddressType | null = null;
  protected shipping_method: ShippingMethodType | null = null;
  protected calculation: CalculationCartType | null = null;
  protected discounts: DiscountType[] | null = [];
  protected taxes: TaxType[] | null = [];
  protected payment_session: PaymentSessionType | null = null;
  protected payment_status: typeof CartPaymentStatusType = "pending";
  protected metadata: any = null;
  protected data?: any;

  constructor(_cart: Cart) {
    this.cart = _cart;
  }

  add_item(item: VariantType, quantity: number): CartBuilder {
    this.cart.add_item(item, quantity);
    return this;
  }
  remove_item(itemId: string): CartBuilder {
    this.cart.remove_item(itemId);
    return this;
  }

  update_item(itemId: string, quantity: number): void {
    this.cart.update_item(itemId, quantity);
  }

  create_payment_session(payment: PaymentType, status: typeof PaymentSessionStatusType): void {
    this.cart.create_payment_session(payment, status);
  }

  set_shipping_address(address: AddressType): void {
    this.cart.set_shipping_address(address);
  }

  set_billing_address(address: AddressType): void {
    this.cart.set_billing_address(address);
  }

  redeem_discount(code: string): void {
    this.cart.redeem_discount(code);
  }

  remove_discount(code: string): void {
    this.cart.remove_discount(code);
  }

  submit_order(): void {
    this.cart.submit_order();
  }

  clear_cart_session(): void {
    this.cart.clear_cart_session();
  }

  build(): Cart {
    return this.cart;
  }
}

export { Cart, CartBuilder };
