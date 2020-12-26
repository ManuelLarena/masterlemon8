import * as React from 'react';
import { getCharacter } from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';

export const useCharacter = () => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter
  );

  const loadCharacter = (id: string) => {
    getCharacter(id)
    .then((result) => {
      // console.log(result);
      setCharacter(mapCharacterFromApiToVm(result));
    })
    .catch((error) => {
      console.error({ error });
      // Informar al usuario
      // TODO snackbar - material ui
    });
  };

  return {
    character,
    loadCharacter,
  };
};
