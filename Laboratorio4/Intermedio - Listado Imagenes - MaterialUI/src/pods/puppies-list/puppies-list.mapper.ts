import * as apiModel from './api/puppies-list.api-model';
import * as viewModel from './puppies-list.vm';

const mapPuppiesFromApiToVm = (
  puppies: apiModel.Puppies
): viewModel.Puppies => ({
  ...puppies,
  selected: false,
});

export const mapPuppiesListFromApiToVm = (
  puppiesList: apiModel.Puppies[]
): viewModel.Puppies[] => puppiesList.map(e => mapPuppiesFromApiToVm(e));
