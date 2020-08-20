import React from 'react';
import { CheckoutComponent } from './checkout.component';
import { ShoppingCartContext, Selection } from 'core/shopping-cart.context';
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';

export const CheckoutContainer: React.FunctionComponent = () => {
  const history = useHistory();
  const TAX_RATE: number = 0.21;
  const shoppingCartContext = React.useContext(ShoppingCartContext);

  const subtotal = (items: Selection[]): number =>
    items.reduce((sum, item) => sum + item.price, 0);

  const ccyFormat = (num: number): string => `${num.toFixed(2)}`;

  const invoiceSubtotal: number = subtotal(shoppingCartContext.selection);
  const invoiceTaxes: number = TAX_RATE * invoiceSubtotal;
  const invoiceTotal: number = invoiceTaxes + invoiceSubtotal;

  const handleBack = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    history.goBack();

  const handleCheckOut = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    shoppingCartContext.eraseCart();
    history.push(routes.root);
  };

  return (
    <>
      <CheckoutComponent
        shoppingCart={shoppingCartContext.selection}
        onBack={handleBack}
        toBuy={handleCheckOut}
        changeFormat={ccyFormat}
        subtotal={invoiceSubtotal}
        TAXRATE={TAX_RATE}
        taxes={invoiceTaxes}
        total={invoiceTotal}
      />
    </>
  );
};
