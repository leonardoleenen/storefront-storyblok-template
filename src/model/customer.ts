export type CustomerType = {
	id: string;
	canonical_name?: string;
	email: string;
	name: string;
	phone_number: string;
};

export type AddressType = {
	id: string;
	name: string;
	address_1: string;
	address_2?: string;
	postal_code: string;
	city: string;
	province?: string;
	country?: string;
};
