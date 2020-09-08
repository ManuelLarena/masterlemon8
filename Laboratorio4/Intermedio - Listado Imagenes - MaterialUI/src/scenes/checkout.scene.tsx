import React from 'react';
import { CheckoutContainer } from 'pods/checkout';
import { CenteredShoppingLayout } from 'layouts/centered.shopping-layout';

export const CheckoutScene: React.FC = () => {
  return (
    <CenteredShoppingLayout>
      <CheckoutContainer />
    </CenteredShoppingLayout>
  );
};
