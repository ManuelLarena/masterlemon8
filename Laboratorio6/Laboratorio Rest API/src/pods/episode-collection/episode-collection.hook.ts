import * as React from 'react';
import {
  EpisodeEntityVm,
} from './episode-collection.vm';
import { getEpisodeCollectionPage, getSearchEpisodeCollection } from './api';
import { mapEpisodeFromApiToVm } from './episode-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useEpisodeCollection = () => {
  const [episodeCollection, setEpisodeCollection] = React.useState<
    EpisodeEntityVm[]
  >([]);
  const [totalPages, setTotalPages] = React.useState<number>(0);

  const loadEpisodeCollection = (page: number) => {
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
  };

  const loadSearchEpisodeCollection = (name: string) => {
    getSearchEpisodeCollection(name)
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
  };

  return {
    episodeCollection,
    totalPages,
    loadEpisodeCollection,
    loadSearchEpisodeCollection,
  };
};
