import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { RickAndMortyScene } from 'scenes/rickandmorty.scene';
import { CharacterScene } from 'scenes/character.scene';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.rickandmorty]}
          component={RickAndMortyScene}
        />
        {/* <Route
          exact={true}
          path={switchRoutes.characterCollection}
          component={CharacterCollectionScene}
        />
        <Route
          exact={true}
          path={switchRoutes.locationCollection}
          component={CharacterCollectionScene}
        /> */}
        <Route
          exact={true}
          path={switchRoutes.createCharacter}
          component={CharacterScene}
        />
        <Route
          exact={true}
          path={switchRoutes.editCharacter}
          component={CharacterScene}
        />
      </Switch>
    </HashRouter>
  );
};
