import * as apiModel from 'core/api/pets-list.api-model';
import * as viewModel from './kitties-list.vm';

const mapKittiesFromApiToVm = (
  kitties: apiModel.Pets
): viewModel.Kitties => ({
  ...kitties,
  selected: false,
});

export const mapKittiesListFromApiToVm = (
  kittiesList: apiModel.Pets[]
): viewModel.Kitties[] => kittiesList.map(e => mapKittiesFromApiToVm(e));
