import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.ResultsEntityApi
): viewModel.CharacterEntityVm => ({
  id: character.id.toString(),
  picture: character.image,
  name: character.name,
  subheader: `${character.species} - ${character.gender}`,
  status: character.status,
  created: new Date(character.created).toLocaleDateString(),
});
