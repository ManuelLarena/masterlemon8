export interface LocationEntityApi {
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
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}


