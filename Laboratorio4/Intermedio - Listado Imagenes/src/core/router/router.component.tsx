import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { KittiesListScene, PuppiesListScene } from 'scenes';

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.kittiesList]}
          component={KittiesListScene}
        />
        <Route
          exact={true}
          path={[switchRoutes.puppiesList]}
          component={PuppiesListScene}
        />
      </Switch>
    </Router>
  );
};
