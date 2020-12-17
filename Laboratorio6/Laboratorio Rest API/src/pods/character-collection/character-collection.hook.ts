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

  const loadCharacterCollection = (page: number) => {
    getCharacterCollectionPage(page)
      .then((result) => {
        const { info, results } = result;
        setTotalPages(info.pages);
        setCharacterCollection(
          mapToCollection(results, mapCharacterFromApiToVm)
        );
      })
      .catch((error) => {
        console.error({ error });
        // Informar al usuario
        // TODO snackbar - material ui
      });
  };

  const loadSearchCharacterCollection = (name: string) => {
    getSearchCharacterCollection(name)
      .then((result) => {
        const { info, results } = result;
        setTotalPages(info.pages);
        setCharacterCollection(
          mapToCollection(results, mapCharacterFromApiToVm)
        );
      })
      .catch((error) => {
        console.error({ error });
        // Informar al usuario
        // TODO snackbar - material ui
      });
  };

  return {
    characterCollection,
    totalPages,
    loadCharacterCollection,
    loadSearchCharacterCollection,
  };
};
