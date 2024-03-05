import { MoneyType } from './general';

export type ProductImageType = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

export type CategoryType = {
	id: string;
	name: string;
	description: string;
};

export type CollectionType = {
	id: string;
	name: string;
	description: string;
	products: ProductType[];
	attributes: Record<string, unknown>;
};

export type VariantType = {
	id: string;
	sku: string;
	description: string; //Could be a markdown text
	price: MoneyType;
	slug?: string;
	attributes?: Record<string, unknown>;
	metadata?: Record<string, unknown>;
	images: ProductImageType[];
};

export type ProductType = {
	id: string;
	variants: VariantType[];
	categories: CategoryType[];
	title: string;
	subtitle: string;
	description: string;
};
