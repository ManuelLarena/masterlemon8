import * as apiModel from './api/location-collection.api-model';
import * as viewModel from './location-collection.vm';

export const mapLocationFromApiToVm = (
  location: apiModel.ResultsEntityApi
): viewModel.LocationEntityVm => ({
  id: location.id,
  name: location.name,
  type: location.type,
  dimension: location.dimension,
  created: new Date(location.created).toLocaleDateString(),
});
