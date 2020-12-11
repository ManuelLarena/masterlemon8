import Axios from 'axios';
import { ErrorMessage } from 'formik';
import {
  CharacterCollectionEntityApi,
  CharacterEntityApi,
  EpisodeCollectionEntityApi,
  EpisodeEntityApi,
  LocationCollectionEntityApi,
  LocationEntityApi,
  InfoEntityApi,
} from './rickandmorty.api-model';

const urlCharacter = `${process.env.BASE_API_URL}/character/`;
const urlEpisode = `${process.env.BASE_API_URL}/episode/`;
const urlLocation = `${process.env.BASE_API_URL}/location/`;

const getCharacterCollectionPage = async (
  page: number
): Promise<CharacterCollectionEntityApi> => {
  const { data } = await Axios.get(`${urlCharacter}/?page=${page}`);
  const results: CharacterEntityApi[] = data.results;
  const info: InfoEntityApi = data.info;

  return { info, results };
};

const getEpisodeCollectionPage = async (
  page: number
): Promise<EpisodeCollectionEntityApi> => {
  const { data } = await Axios.get(`${urlEpisode}/?page=${page}`);
  const results: EpisodeEntityApi[] = data.results;
  const info: InfoEntityApi = data.info;

  return { info, results };
};

const getLocationCollectionPage = async (
  page: number
): Promise<LocationCollectionEntityApi> => {
  const { data } = await Axios.get(`${urlLocation}/?page=${page}`);
  const results: LocationEntityApi[] = data.results;
  const info: InfoEntityApi = data.info;

  return { info, results };
};

export const getRickAndMortyCollection = Promise.all([
  getCharacterCollectionPage,
  getEpisodeCollectionPage,
  getLocationCollectionPage,
]).then((results) => {
  console.log(results);
  const getCharacterCollection = results[0];
  const getEpisodeCollection = results[1];
  const getLocationCollection = results[2];

  return {
    getCharacterCollection,
    getEpisodeCollection,
    getLocationCollection,
  };
});



