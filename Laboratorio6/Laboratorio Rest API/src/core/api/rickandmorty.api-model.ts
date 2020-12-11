export interface CharacterCollectionEntityApi {
  info: InfoEntityApi;
  results: CharacterEntityApi[];
}

export interface EpisodeCollectionEntityApi {
  info: InfoEntityApi;
  results: EpisodeEntityApi[];
}

export interface LocationCollectionEntityApi {
  info: InfoEntityApi;
  results: LocationEntityApi[];
}

export interface InfoEntityApi {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface CharacterEntityApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface EpisodeEntityApi {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface LocationEntityApi {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}
