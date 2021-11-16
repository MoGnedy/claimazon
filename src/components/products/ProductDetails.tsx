import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Icon, Image, Segment } from 'semantic-ui-react';
import Product from '../../Models/Product';
import ProductService from '../../services/ProductService';
import ProductNotFound from './ProductNotFound';

const ProductDetails = () => {
  let { sku }: { sku: string } = useParams();
  const [product, setProduct] = useState<Product | undefined>({});

  useEffect(() => {
    const productService = new ProductService();

    productService
      .getSingleProduct(sku)
      .then((product: Product | undefined) => {
        setProduct(product);
      })
      .catch(console.log);
  }, [sku]);

  return product ? (
    <Segment>
      <Card fluid centered raised>
        <Image
          verticalAlign="bottom"
          size="large"
          centered
          bordered
          src={product?.image || '/img/placeholder-image.jpg'}
          wrapped
        />
        <Card.Content>
          <Card.Header>{product.title}</Card.Header>
          <Card.Meta>
            <span>
              <Icon disabled name="user"></Icon> {product.author}
            </span>
          </Card.Meta>
          <Card.Description>{product?.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          {`${product.price} ${product.currency}`}
        </Card.Content>
      </Card>
    </Segment>
  ) : (
    <ProductNotFound />
  );
};

export default ProductDetails;
