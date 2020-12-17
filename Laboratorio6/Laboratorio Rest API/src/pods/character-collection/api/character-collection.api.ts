import Axios from 'axios';
import { gql } from 'graphql-request';
import { graphqlClient } from 'core/api';
import {
  CharacterEntityApi,
} from './character-collection.api-model';

const url = `${process.env.BASE_API_URL}/character/`;
const characterListUrl = '/api/characters';

interface GetCharacterCollectionResponse {
  characters: CharacterEntityApi;
}

export const getCharacterCollectionPage = async (
  page: number
): Promise<CharacterEntityApi> => {
  const query = gql`
    query {
      characters(page: ${page}) {
        info {
          pages
        }
        results {
          id
          image
          name
          species
          gender
          status
          created
        }
      }
    }
  `;

  const {
    characters,
  } = await graphqlClient.request<GetCharacterCollectionResponse>(query);

  return characters;
};

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
): Promise<CharacterEntityApi> => {
  const query = gql`
    query {
      characters(filter: {name: "${name}"}) {
        info{
          pages
        }
        results {
          id
          image
          name
          species
          gender
          status
          created
        }
      }
    }
  `;

  const {
    characters,
  } = await graphqlClient.request<GetCharacterCollectionResponse>(query);

  return characters;
};
