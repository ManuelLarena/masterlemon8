import Axios from 'axios';
import {
  ResultsEntityApi,
  CharacterEntityApi,
} from './episode-collection.api-model';

const url = `${process.env.BASE_API_URL}/episode/`;

export const getSearchEpisodeCollection = async (
  name: string
): Promise<ResultsEntityApi[]> => {
  const { data } = await Axios.get(`${url}/?name=${name}`);
  const result: ResultsEntityApi[] = data.results;

  return result;
};

