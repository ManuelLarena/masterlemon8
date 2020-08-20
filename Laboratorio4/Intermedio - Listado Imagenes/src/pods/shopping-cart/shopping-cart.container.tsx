import React from 'react';
import * as classes from './shopping-cart.styles';
import { ShoppingCartComponent } from './shopping-cart.component';


export const ShoppingCart: React.FC = () => {

  return (
    <>
      <h1 className={classes.title}>Cart</h1>
      <ShoppingCartComponent />
    </>
    // <ul>
    //   {shoppingCartContext.selection.map(element => (
    //     <li key={element.id}>{element.picUrl}{element.title}</li>
    //   ))}
    // </ul>
  );
};
