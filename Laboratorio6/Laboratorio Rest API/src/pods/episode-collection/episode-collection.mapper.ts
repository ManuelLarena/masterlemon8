import * as apiModel from './api/episode-collection.api-model';
import * as viewModel from './episode-collection.vm';

export const mapEpisodeFromApiToVm = (
  episode: apiModel.ResultsEntityApi
): viewModel.EpisodeEntityVm => ({
  id: episode.id.toString(),
  name: episode.name,
  airDate: episode.air_date,
  episode: episode.episode,
  charactersUrl: episode.characters,
  created: new Date(episode.created).toLocaleDateString(),
});

export const mapCharacterFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: character.id.toString(),
  name: character.name,
  picture: character.image,
});
