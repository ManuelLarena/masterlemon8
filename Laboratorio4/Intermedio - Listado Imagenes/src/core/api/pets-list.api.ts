import { Pets } from './pets-list.api-model';
import { mockPuppiesList, mockKittiesList } from './pets-list.mock-data';

let kittiesList = [...mockKittiesList];

export const getKittiesList = async (): Promise<Pets[]> => {
  return kittiesList;
};

let puppiesList = [...mockPuppiesList];

export const getPuppiesList = async (): Promise<Pets[]> => {
  return puppiesList;
};