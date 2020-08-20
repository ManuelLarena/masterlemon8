import { Puppies } from './puppies-list.api-model';
import { mockPuppiesList } from './puppies-list.mock-data';

let puppiesList = [...mockPuppiesList];

export const getPuppiesList = async (): Promise<Puppies[]> => {
  return puppiesList;
};
