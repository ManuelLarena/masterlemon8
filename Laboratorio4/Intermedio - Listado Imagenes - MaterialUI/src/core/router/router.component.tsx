import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { PetsListScene } from 'scenes';
import { CheckoutScene } from 'scenes';

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.petsList]}
          component={PetsListScene}
        />
        <Route
          exact={true}
          path={[switchRoutes.checkout]}
          component={CheckoutScene}
        />
      </Switch>
    </Router>
  );
};
