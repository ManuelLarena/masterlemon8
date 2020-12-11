import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  createCharacter: string;
  editCharacter: string;
  locationCollection: string;
  rickandmorty: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  rickandmorty: '/rickandmorty',
  characterCollection: '/characters',
  createCharacter: '/characters/create',
  editCharacter: '/characters/:id',
  locationCollection: '/locations',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editCharacter'> {
  editCharacter: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
};
