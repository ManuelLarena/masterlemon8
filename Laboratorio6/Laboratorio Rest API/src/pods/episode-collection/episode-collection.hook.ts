import * as React from 'react';
import {
  EpisodeEntityVm,
  CharacterEntityVm,
  createEmptyCharacterEntity,
} from './episode-collection.vm';
import { getSearchEpisodeCollection } from './api';
import { getRickAndMortyCollection } from 'core/api';
import { mapEpisodeFromApiToVm } from './episode-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useEpisodeCollection = () => {
  const [episodeCollection, setEpisodeCollection] = React.useState<
    EpisodeEntityVm[]
  >([]);
  const [character, setCharacter] = React.useState<CharacterEntityVm>(
    createEmptyCharacterEntity
  );
  const [totalPages, setTotalPages] = React.useState<number>(0);

  const loadEpisodeCollection = (page: number) => {
    getRickAndMortyCollection.then((response) => {
      const getEpisodeCollectionPage = response.getEpisodeCollection;
      getEpisodeCollectionPage(page)
        .then((result) => {
          const { info, results } = result;
          setTotalPages(info.pages);
          setEpisodeCollection(mapToCollection(results, mapEpisodeFromApiToVm));
        })
        .catch((error) => {
          console.error({ error });
          // Informar al usuario
          // TODO snackbar - material ui
        });
    });
  };

  const loadSearchEpisodeCollection = (name: string) => {
    getSearchEpisodeCollection(name)
      .then((result) => {
        setEpisodeCollection(mapToCollection(result, mapEpisodeFromApiToVm));
      })
      .catch((error) => {
        console.error({ error });
        // Informar al usuario
        // TODO snackbar - material ui
      });
  };

  return {
    episodeCollection,
    totalPages,
    character,
    loadEpisodeCollection,
    loadSearchEpisodeCollection,
  };
};
