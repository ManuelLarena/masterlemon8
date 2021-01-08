import React from 'react';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';

export const useCharacterCollection = () => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );

  const loadCharacter = async (id: string) => {
    try {
      const response = await api.getCharacter(id);
      setCharacter(mapCharacterFromApiToVm(response));
    } catch (error) {
      console.error(error);
    }
  };

  return { character, loadCharacter };
};
