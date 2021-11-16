import React, { useState, useEffect } from 'react';
import { Grid, Divider } from 'semantic-ui-react';
import ProductCard from './ProductCard';
import Product from '../../Models/Product';
import ProductService from '../../services/ProductService';

const ProductsContainer = () => {
  const [products, setProducts] = useState<Array<Product> | undefined>([]);

  useEffect(() => {
    const productService = new ProductService();

    productService
      .getProducts()
      .then((products: Array<Product> | undefined) => {
        setProducts(products);
      })
      .catch(console.log);
  }, []);

  return (
    <>
      <Divider horizontal>Shop All Proudcts</Divider>
      <Grid stackable columns="equal" centered>
        {products?.map((product: Product) => (
          <Grid.Column width={5} key={product.sku}>
            <ProductCard product={product} />
          </Grid.Column>
        ))}
      </Grid>
    </>
  );
};

export default ProductsContainer;
