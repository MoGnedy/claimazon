import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import Product from '../../Models/Product';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link to={`${product?.sku}`}>
      <Card
        image={product?.thumbnail || '/img/placeholder-image.jpg'}
        header={product?.title}
        meta={`${product?.price} ${product.currency}`}
        description={product?.description}
      />
    </Link>
  );
};

export default ProductCard;
