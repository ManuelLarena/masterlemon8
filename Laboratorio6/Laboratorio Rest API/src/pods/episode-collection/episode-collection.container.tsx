import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useEpisodeCollection } from './episode-collection.hook';
import { usePagination } from 'common/components/pagination';
import { EpisodeCollectionComponent } from './episode-collection.component';

export const EpisodeCollectionContainer: React.FC = () => {
  const {
    episodeCollection,
    totalPages,
    loadEpisodeCollection,
    loadSearchEpisodeCollection,
  } = useEpisodeCollection();

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
    loadEpisodeCollection(page);
  }, [page]);

  React.useEffect(() => {
    loadSearchEpisodeCollection(name);
  }, [name]);

  // const handleReview = (id: string) => {
  //   history.push(linkRoutes.editCharacter(id));
  // };

  const handleSearchLocationCollection = () => {
    const nameValue = (document.getElementById(
      'search-input'
    ) as HTMLInputElement).value.toLowerCase();
    setName(nameValue);
    nameValue ? setLastPage(true) : setLastPage(false);
  };

  return (
    <EpisodeCollectionComponent
      page={page}
      totalPages={totalPages}
      isFirstPage={isFirstPage}
      isLastPage={isLastPage}
      episodeCollection={episodeCollection}
      onFirstPage={handleFirstPage}
      onLastPage={handleLastPage}
      onPrevPage={handlePrevPage}
      onNextPage={handleNextPage}
      onSearch={handleSearchLocationCollection}
    />
  );
};
