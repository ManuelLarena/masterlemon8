import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import {
  getCharacterCollectionPage,
  getSearchCharacterCollection,
} from './api';
import { mapCharacterFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);
  const [totalPages, setTotalPages] = React.useState<number>(0);

  const loadCharacterCollection = async (page: number) => {
    try {
      const response = await getCharacterCollectionPage(page);
      const { info, results } = response;
      setTotalPages(info.pages);
      setCharacterCollection(mapToCollection(results, mapCharacterFromApiToVm));
    } catch (error) {
      console.error(error);
      // Informar al usuario
      // TODO snackbar - material ui
    }
  };

  const loadSearchCharacterCollection = async (name: string) => {
    try {
      const response = await getSearchCharacterCollection(name);
      const { info, results } = response;
      setTotalPages(info.pages);
      setCharacterCollection(mapToCollection(results, mapCharacterFromApiToVm));
    } catch (error) {
      console.error(error);
      // Informar al usuario
      // TODO snackbar - material ui
    }
  };

  return {
    characterCollection,
    totalPages,
    loadCharacterCollection,
    loadSearchCharacterCollection,
  };
};
