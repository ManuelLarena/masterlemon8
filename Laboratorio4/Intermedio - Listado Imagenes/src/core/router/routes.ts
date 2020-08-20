import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  kittiesList: string;
  puppiesList: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  kittiesList: '/kitties-list',
  puppiesList: '/puppies-list',
};

interface Routes extends SwitchRoutes {};

export const routes: Routes = {
  ...switchRoutes,
};
