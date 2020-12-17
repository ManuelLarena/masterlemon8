import Axios from 'axios';
import { gql } from 'graphql-request';
import { graphqlClient } from 'core/api';
import { Character } from './character.api-model';

// const url = `${process.env.BASE_API_URL}/character`;
const characterListUrl = '/api/characters';

interface GetCharacterResponse {
  charactersByIds: Character;
}

export const getCharacter = async (id: string): Promise<Character> => {
  const response = await Axios.get<Character>(`${characterListUrl}/${id}`);
  const query = gql`
    query {
      charactersByIds(ids: "${id}") {
        id
        name
        gender
        species
        status
      }
    }
  `;

  const { charactersByIds } = await graphqlClient.request<GetCharacterResponse>(
    query
  );
  const { comment } = response.data;

  console.log(charactersByIds);

  const dataComment: Character = {
    ...charactersByIds[0],
    comment,
  };

  return dataComment;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  if (character.id) {
    await Axios.patch<Character>(
      `${characterListUrl}/${character.id}`,
      character
    );
  } else {
    await Axios.post<Character>(characterListUrl, character);
  }

  return true;

  // Fetch
  // if(character.id) {
  //   await fetch(`${characterListUrl}/${character.id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(character),
  //   });
  // } else {
  //   await fetch(characterListUrl, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(character),
  //   });
  // }
  // return true;
};
