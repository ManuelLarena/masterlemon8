import * as apiModel from './api/episode-collection.api-model';
import * as viewModel from './episode-collection.vm';

export const mapEpisodeFromApiToVm = (
  episode: apiModel.ResultsEntityApi
): viewModel.EpisodeEntityVm => ({
  id: episode.id,
  name: episode.name,
  airDate: episode.air_date,
  episode: episode.episode,
  characters: episode.characters.map(character => mapCharactersApiToVm(character)),
  created: new Date(episode.created).toLocaleDateString(),
});

const mapCharactersApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: character.id,
  name: character.name,
  picture: character.image,
});
