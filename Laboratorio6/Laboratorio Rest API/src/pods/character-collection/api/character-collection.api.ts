import Axios from 'axios';
import {
  ResultsEntityApi,
} from './character-collection.api-model';

const url = `${process.env.BASE_API_URL}/character/`;
const characterListUrl = '/api/characters';

export const deleteCharacter = async (id: string): Promise<boolean> => {
  // Axios
  await Axios.delete(`${characterListUrl}/${id}`);

  return true;

  // Fetch
  // const response = await fetch(`${characterListUrl}/${id}`, {method: 'DELETE'});
  // return response.ok;
};

export const getSearchCharacterCollection = async (
  name: string
): Promise<ResultsEntityApi[]> => {
  const { data } = await Axios.get(`${url}/?name=${name}`);
  const result: ResultsEntityApi[] = data.results;

  return result;
};
