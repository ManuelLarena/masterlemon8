export interface EpisodeEntityApi {
  info: InfoEntityApi;
  results: ResultsEntityApi[];
}

export interface InfoEntityApi {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface ResultsEntityApi {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: CharacterEntityApi[];
  url: string;
  created: string;
}

export interface CharacterEntityApi {
  id: string;
  name: string;
  image: string
}
