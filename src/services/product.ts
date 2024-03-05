import { ProductType, VariantType } from '@/model/product';

abstract class ProductManager {
	abstract get_by_id(product_id: string): Promise<ProductType>;
	abstract search(query: string): Promise<ProductType[]>;
	abstract search_by_name(product_name: string): ProductType[];
	abstract search__by_description(product_description: string): ProductType[];
	abstract search_by_category(category_id: string): ProductType[];
	abstract search_by_collection(collection_id: string): ProductType[];
	abstract search_by_sku(sku: string): VariantType;
}

class ProductManagerBuilder extends ProductManager {
	protected productManager: ProductManager;

	constructor(_productManager: ProductManager) {
		super();
		this.productManager = _productManager;
	}

	async search(query: string): Promise<ProductType[]> {
		return this.productManager.search(query);
	}
	search_by_name(product_name: string): ProductType[] {
		return this.productManager.search_by_name(product_name);
	}
	search__by_description(product_description: string): ProductType[] {
		return this.productManager.search__by_description(product_description);
	}
	search_by_category(category_id: string): ProductType[] {
		return this.productManager.search_by_category(category_id);
	}
	search_by_collection(collection_id: string): ProductType[] {
		return this.productManager.search_by_collection(collection_id);
	}

	async get_by_id(product_id: string): Promise<ProductType> {
		return this.productManager.get_by_id(product_id);
	}

	search_by_sku(sku: string): VariantType {
		return this.productManager.search_by_sku(sku);
	}

	build(): ProductManager {
		return this.productManager;
	}
}

export { ProductManager, ProductManagerBuilder };
