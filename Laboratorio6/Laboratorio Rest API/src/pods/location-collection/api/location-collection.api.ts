import Axios from 'axios';
import {
  ResultsEntityApi,
} from './location-collection.api-model';

const url = `${process.env.BASE_API_URL}/location/`;

export const getSearchLocationCollection = async (
  name: string
): Promise<ResultsEntityApi[]> => {
  const { data } = await Axios.get(`${url}/?name=${name}`);
  const result: ResultsEntityApi[] = data.results;

  return result;
};
