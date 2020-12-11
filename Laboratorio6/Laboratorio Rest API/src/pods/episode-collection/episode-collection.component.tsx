import * as React from 'react';
import Button from '@material-ui/core/Button';
import { EpisodeEntityVm } from './episode-collection.vm';
import { CharacterEntityVm } from 'pods/character-collection/character-collection.vm';
import { EpisodeCard } from './components/episode-card.component';
import { PaginationComponent } from 'common/components/pagination';
import { SearchComponent } from 'common/components/search/search.component';
import * as classes from './episode-collection.styles';

interface Props {
  page: number;
  totalPages: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  episodeCollection: EpisodeEntityVm[];
  onFirstPage: () => void;
  onLastPage: () => void;
  onPrevPage: () => void;
  onNextPage: () => void;
  onSearch: () => void;
  onReview: (id: string) => void;
}

export const EpisodeCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const {
    page,
    totalPages,
    isFirstPage,
    isLastPage,
    episodeCollection,
    onFirstPage,
    onLastPage,
    onNextPage,
    onPrevPage,
    onSearch,
    onReview,
  } = props;

  return (
    <div className={classes.root}>
      <div className={classes.buttons}>
        <PaginationComponent
          page={page}
          totalPages={totalPages}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          onFirstPage={onFirstPage}
          onLastPage={onLastPage}
          onPrevPage={onPrevPage}
          onNextPage={onNextPage}
        />
      </div>
      <SearchComponent section="episode" onSearch={onSearch} />
      <ul className={classes.list}>
        {episodeCollection.map((episode) => (
          <li key={episode.id}>
            <EpisodeCard episode={episode} onReview={onReview} />
          </li>
        ))}
      </ul>
    </div>
  );
};
