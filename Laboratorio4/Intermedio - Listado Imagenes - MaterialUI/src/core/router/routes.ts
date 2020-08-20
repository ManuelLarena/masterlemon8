import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  // kittiesList: string;
  // puppiesList: string;
  petsList: string;
  checkout: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  // kittiesList: '/kitties-list',
  // puppiesList: '/puppies-list',
  petsList: '/pets-list',
  checkout: '/checkout',
};

interface Routes extends SwitchRoutes {};

export const routes: Routes = {
  ...switchRoutes,
};
