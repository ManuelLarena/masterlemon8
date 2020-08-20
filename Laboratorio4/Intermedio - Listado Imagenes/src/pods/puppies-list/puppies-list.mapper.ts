import * as apiModel from 'core/api/pets-list.api-model';
import * as viewModel from './puppies-list.vm';

const mapPuppiesFromApiToVm = (
  puppies: apiModel.Pets
): viewModel.Puppies => ({
  ...puppies,
  selected: false,
});

export const mapPuppiesListFromApiToVm = (
  puppiesList: apiModel.Pets[]
): viewModel.Puppies[] => puppiesList.map(e => mapPuppiesFromApiToVm(e));
