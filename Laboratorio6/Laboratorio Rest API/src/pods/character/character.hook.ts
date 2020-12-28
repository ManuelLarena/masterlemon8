import React from 'react';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';

export const useCharacterCollection = () => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );

  const loadCharacter = async (id: string) => {
    // const apiCharacter = await api.getCharacter(id);
    // setCharacter(mapCharacterFromApiToVm(apiCharacter));
    api.getCharacter(id)
    .then((result) => {
      setCharacter(mapCharacterFromApiToVm(result));
    })
    .catch((error) => {
      console.error({error});
    });
  };

  return { character, loadCharacter };
};
