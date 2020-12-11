import Axios from 'axios';
import { Character } from './character.api-model';

const url = `${process.env.BASE_API_URL}/character`;
const characterListUrl = '/api/characters';

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await Axios.get<Character>(`${url}/${id}`);
  const response = await Axios.get<Character>(`${characterListUrl}/${id}`);

  const { comment } = response.data;
  const dataComment: Character = {
    ...data,
    comment
  }

  console.log(dataComment);

  return dataComment;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  if (character.id) {
    await Axios.put<Character>(
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

