export interface EpisodeEntityVm {
  id: string;
  name: string;
  airDate: string;
  episode: string;
  characters: CharacterEntityVm[];
  created: string;
}

export interface InfoEntityVm {
  pages: number;
  next: string;
  prev: string;
}

export interface CharacterEntityVm {
  id: string;
  name: string;
  picture: string;
}

