import * as React from 'react';
import { EpisodeEntityVm } from './episode-collection.vm';
import { getEpisodeCollectionPage, getSearchEpisodeCollection } from './api';
import { mapEpisodeFromApiToVm } from './episode-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useEpisodeCollection = () => {
  const [episodeCollection, setEpisodeCollection] = React.useState<
    EpisodeEntityVm[]
  >([]);
  const [totalPages, setTotalPages] = React.useState<number>(0);

  const loadEpisodeCollection = async (page: number) => {
    try {
      const response = await getEpisodeCollectionPage(page);
      const { info, results } = response;
      setTotalPages(info.pages);
      setEpisodeCollection(mapToCollection(results, mapEpisodeFromApiToVm));
    } catch (error) {
      console.error(error);
      // Informar al usuario
      // TODO snackbar - material ui
    }
  };

  const loadSearchEpisodeCollection = async (name: string) => {
    try {
      const response = await getSearchEpisodeCollection(name);
      const { info, results } = response;
      setTotalPages(info.pages);
      setEpisodeCollection(mapToCollection(results, mapEpisodeFromApiToVm));
    } catch (error) {
      console.error(error);
      // Informar al usuario
      // TODO snackbar - material ui
    }
  };

  return {
    episodeCollection,
    totalPages,
    loadEpisodeCollection,
    loadSearchEpisodeCollection,
  };
};
