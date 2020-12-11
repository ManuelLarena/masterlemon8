import * as React from 'react';
import Button from '@material-ui/core/Button';
import { LocationEntityVm } from './location-collection.vm';
import { LocationCard } from './components/location-card.component';
import { PaginationComponent } from 'common/components/pagination';
import { SearchComponent } from 'common/components/search/search.component';
import * as classes from './location-collection.styles';

interface Props {
  page: number;
  totalPages: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  locationCollection: LocationEntityVm[];
  onFirstPage: () => void;
  onLastPage: () => void;
  onPrevPage: () => void;
  onNextPage: () => void;
  onSearch: () => void;
}

export const LocationCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const {
    page,
    totalPages,
    isFirstPage,
    isLastPage,
    locationCollection,
    onFirstPage,
    onLastPage,
    onNextPage,
    onPrevPage,
    onSearch,
  } = props;

  return (
    <div className={classes.root}>
      <div className={classes.buttons}>
        {/* <Button variant="contained" color="primary" onClick={onCreateCharacter}>
          Add character
        </Button> */}

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
      <SearchComponent section='location' onSearch={onSearch} />
      <ul className={classes.list}>
        {locationCollection.map((location) => (
          <li key={location.id}>
            <LocationCard location={location} />
          </li>
        ))}
      </ul>
    </div>
  );
};
