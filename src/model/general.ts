export type MoneyType = {
	amount_in_cents: number;
	fraction: number;
	currency_symbol: string;
};

export type DiscountType = {
	amount: number;
	percent: number;
	code: string;
};

export type TaxType = {
	amount: number;
	percent: number;
	code: string;
};

export type ImageType = {
	id?: string;
	url: string;
	alt: string;
	height: number;
	width: number;
};
