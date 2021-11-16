import Product from "./Product";

export default interface ProductsApiResponse {
    products: {
        product: Array<Product>
    }
}