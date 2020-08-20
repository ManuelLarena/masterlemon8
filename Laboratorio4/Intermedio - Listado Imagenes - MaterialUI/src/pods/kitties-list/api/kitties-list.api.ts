import { Kitties } from './kitties-list.api-model';
import { mockKittiesList } from './kitties-list.mock-data';

let kittiesList = [...mockKittiesList];

export const getKittiesList = async (): Promise<Kitties[]> => {
  return kittiesList;
};
