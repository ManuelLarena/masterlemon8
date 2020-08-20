import React from 'react';
import { hot } from 'react-hot-loader/root';
import { RouterComponent } from 'core/router';
import { ShoppingCartContextProvider } from 'core/shopping-cart.context';

const App: React.FunctionComponent = () => {
  return (
    <ShoppingCartContextProvider>
      <RouterComponent />
    </ShoppingCartContextProvider>
  );
};

export default hot(App);
