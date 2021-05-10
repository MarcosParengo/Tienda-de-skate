import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BnavBar from './components/bootsnavbar';
import ItemListContainer from './containers/ItemListContainer'
import ItemDetail from './containers/ItemDetail'
import Checkout from './containers/Checkout'
import { CartProvider } from './context/cartContext.jsx'
import AfterCheckout from './containers/AfterCheckout';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <BnavBar linkTo={"https://www.thrashermagazine.com/"} />
          <Switch>
            <Route exact path="/Tienda-de-skate/">
              <ItemListContainer />
            </Route>
            <Route exact path="/Tienda-de-skate/category/:id">
              <ItemListContainer />
            </Route>
            <Route exact path="/Tienda-de-skate/itemDetail/:id">
              <ItemDetail />
            </Route>
            <Route exact path="/Tienda-de-skate/Checkout">
              <Checkout />
            </Route>
            <Route exact path="/Tienda-de-skate/afterCheckout/:token/:name">
              <AfterCheckout />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
