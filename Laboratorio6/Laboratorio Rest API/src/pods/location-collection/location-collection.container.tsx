import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useLocationCollection } from './location-collection.hook';
import { usePagination } from 'common/components/pagination/pagination.hook';
import { LocationCollectionComponent } from './location-collection.component';

export const LocationCollectionContainer: React.FC = () => {
  const {
    locationCollection,
    totalPages,
    loadLocationCollection,
    loadSearchLocationCollection,
  } = useLocationCollection();
  const {
    page,
    isFirstPage,
    isLastPage,
    setLastPage,
    handleFirstPage,
    handlePrevPage,
    handleLastPage,
    handleNextPage,
  } = usePagination(totalPages);

  const history = useHistory();
  const [name, setName] = React.useState<string>('');

  React.useEffect(() => {
    loadLocationCollection(page);
  }, [page]);

  React.useEffect(() => {
    loadSearchLocationCollection(name);
  }, [name]);

  const handleSearchLocationCollection = () => {
    const nameValue = (document.getElementById(
      'search-input'
    ) as HTMLInputElement).value.toLowerCase();
    setName(nameValue);
    nameValue ? setLastPage(true) : setLastPage(false);
  };

  return (
    <LocationCollectionComponent
      page={page}
      totalPages={totalPages}
      isFirstPage={isFirstPage}
      isLastPage={isLastPage}
      locationCollection={locationCollection}
      onFirstPage={handleFirstPage}
      onLastPage={handleLastPage}
      onPrevPage={handlePrevPage}
      onNextPage={handleNextPage}
      onSearch={handleSearchLocationCollection}
    />
  );
};
