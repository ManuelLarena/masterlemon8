import React from 'react';
import { ShoppingCart } from 'pods/shopping-cart';
import * as classes from './shopping-layout.styles';

export const ShoppingLayout: React.FC = props => {
  const { children } = props;
  
  return (
    <div className={classes.container}>
      <div className={classes.leftColumn}>{children}</div>
      <div className={classes.rightColumn}>
        <ShoppingCart />
      </div>
    </div>
  );
};
