import * as apiModel from './api/kitties-list.api-model';
import * as viewModel from './kitties-list.vm';

const mapKittiesFromApiToVm = (
  kitties: apiModel.Kitties
): viewModel.Kitties => ({
  ...kitties,
  selected: false,
});

export const mapKittiesListFromApiToVm = (
  kittiesList: apiModel.Kitties[]
): viewModel.Kitties[] => kittiesList.map(e => mapKittiesFromApiToVm(e));
