import { Message, Segment } from 'semantic-ui-react';
const ProductNotFound = () => {
  return (
    <Segment>
    <Message negative>
      <Message.Header>Not Found</Message.Header>
      <p>Product does not exist.</p>
    </Message>
    </Segment>
  );
};

export default ProductNotFound;
