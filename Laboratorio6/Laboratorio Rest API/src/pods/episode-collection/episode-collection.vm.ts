export interface EpisodeEntityVm {
  id: string;
  name: string;
  airDate: string;
  episode: string;
  charactersUrl: string[];
  created: string;
}

export interface CharacterEntityVm {
  id: string;
  name: string;
  picture: string;
}

export interface InfoEntityVm {
  pages: number;
  next: string;
  prev: string;
}

export const createEmptyEpisodeEntity = (): EpisodeEntityVm => ({
  id: '',
  name: '',
  airDate: '',
  episode: '',
  charactersUrl: [],
  created: '',
});

export const createEmptyCharacterEntity = (): CharacterEntityVm => ({
  id: '',
  name: '',
  picture: '',
});

