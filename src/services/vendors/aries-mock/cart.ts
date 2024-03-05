"use server";

import { VariantType, PaymentType, AddressType, ShippingMethodType } from "@/model";
import { Cart } from "@/services";
import { cookies } from "next/headers";

class CartAries extends Cart {
  constructor() {
    super();
  }
  async get() {
    cookies().set("MyCookie", "MyValue");
  }
  add_item(item: VariantType, quantity: number): void {
    throw new Error("Method not implemented.");
  }
  remove_item(itemId: string): void {
    throw new Error("Method not implemented.");
  }
  update_item(itemId: string, quantity: number): void {
    throw new Error("Method not implemented.");
  }
  create_payment_session(payment: PaymentType, status: "authorized"): void {
    throw new Error("Method not implemented.");
  }
  set_shipping_address(address: AddressType): void {
    throw new Error("Method not implemented.");
  }
  set_billing_address(address: AddressType): void {
    throw new Error("Method not implemented.");
  }
  set_shipping_method(method: ShippingMethodType): void {
    throw new Error("Method not implemented.");
  }
  redeem_discount(code: string): void {
    throw new Error("Method not implemented.");
  }
  remove_discount(code: string): void {
    throw new Error("Method not implemented.");
  }
  submit_order(): void {
    throw new Error("Method not implemented.");
  }
  clear_cart_session(): void {
    throw new Error("Method not implemented.");
  }
}

export { CartAries };
