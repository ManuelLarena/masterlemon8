import React from 'react';
import { hot } from 'react-hot-loader/root';
import { RouterComponent } from 'core/router';
import { ShoppingCartContextProvider } from 'core/shopping-cart.context';
import { ThemeProviderComponent } from 'core/theme';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProviderComponent>
      <ShoppingCartContextProvider>
        <RouterComponent />
      </ShoppingCartContextProvider>
    </ThemeProviderComponent>
  );
};

export default hot(App);
