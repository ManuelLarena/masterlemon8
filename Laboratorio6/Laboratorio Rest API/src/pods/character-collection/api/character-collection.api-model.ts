export interface CharacterEntityApi {
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

