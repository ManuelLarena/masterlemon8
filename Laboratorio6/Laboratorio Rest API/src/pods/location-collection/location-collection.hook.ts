import * as React from 'react';
import { LocationEntityVm } from './location-collection.vm';
import { getSearchLocationCollection } from './api';
import { getRickAndMortyCollection } from 'core/api';
import { mapLocationFromApiToVm } from './location-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useLocationCollection = () => {
  const [locationCollection, setLocationCollection] = React.useState<
    LocationEntityVm[]
  >([]);
  const [totalPages, setTotalPages] = React.useState<number>(0);

  const loadLocationCollection = (page: number) => {
    getRickAndMortyCollection.then((response) => {
      const getLocationCollectionPage = response.getLocationCollection;
      getLocationCollectionPage(page)
        .then((result) => {
          const { info, results } = result;
          setTotalPages(info.pages);
          setLocationCollection(
            mapToCollection(results, mapLocationFromApiToVm)
          );
        })
        .catch((error) => {
          console.error({ error });
          // Informar al usuario
          // TODO snackbar - material ui
        });
    });
  };

  const loadSearchLocationCollection = (name: string) => {
    getSearchLocationCollection(name)
      .then((result) => {
        setLocationCollection(mapToCollection(result, mapLocationFromApiToVm));
      })
      .catch((error) => {
        console.error({ error });
        // Informar al usuario
        // TODO snackbar - material ui
      });
  };

  return {
    locationCollection,
    totalPages,
    loadLocationCollection,
    loadSearchLocationCollection,
  };
};
