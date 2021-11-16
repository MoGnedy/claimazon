import Product from "../Models/Product";
import axios, { AxiosResponse } from "axios";
import PRODUCTS_APIS from "../constants/products-apis";
import ProductsApiResponse from "../Models/ProductsApiResponse";

export default class ProductService {

    async getProducts(params: { [s: string]: any } = {}): Promise<Array<Product> | undefined> {
        const response: AxiosResponse<ProductsApiResponse> = await axios({
            url: PRODUCTS_APIS.getProducts,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            params,
        });
        return response.data.products.product;
    }

    async getSingleProduct(sku: string): Promise<Product | undefined> {
        const response: AxiosResponse<ProductsApiResponse> = await axios({
            url: PRODUCTS_APIS.getSingleProduct.replace('{:sku}', sku),
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });
        return response.data.products.product.find(el => el.sku === sku);
    }

}