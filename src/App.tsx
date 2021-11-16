import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import NavBar from './components/layout/NavBar';
import ProductDetails from './components/products/ProductDetails';
import ProductsContainer from './components/products/ProductsContainer';

function App() {
  return (
    <Router>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={ProductsContainer} />
          <Route path="/:sku" component={ProductDetails} />
        </Switch>
      </Container>
    </Router>
  );
}
export default App;
