import { DiscountType, MoneyType, TaxType } from './general';
import { VariantType } from './product';

export type ContactInfoType = {
	email: string;
	phone: string;
	address: string;
};

export type LineItemType = {
	price: MoneyType;
	product: VariantType;
	quantity: number;
	discounts: DiscountType[];
	taxes: TaxType;
};

export type ShippingMethodType = {
	id: string;
	name: string;
	description: string;
	price?: MoneyType;
};

export type CalculationCartType = {
	shipping_total?: MoneyType;
	shipping_tax_total?: MoneyType;
	discount_total?: MoneyType;
	item_tax_total?: MoneyType;
	tax_total?: MoneyType;
	subtotal: MoneyType;
	total: MoneyType;
};

export const CartPaymentStatusType = 'pending' || 'no_complted' || 'completed';
