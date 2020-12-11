import * as React from 'react';
import Button from '@material-ui/core/Button';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import { PaginationComponent } from 'common/components/pagination';
import { SearchComponent } from 'common/components/search/search.component';
import * as classes from './character-collection.styles';

interface Props {
  page: number;
  totalPages: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  characterCollection: CharacterEntityVm[];
  onCreateCharacter: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onFirstPage: () => void;
  onLastPage: () => void;
  onPrevPage: () => void;
  onNextPage: () => void;
  onSearch: () => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const {
    page,
    totalPages,
    isFirstPage,
    isLastPage,
    characterCollection,
    onCreateCharacter,
    onEdit,
    onDelete,
    onFirstPage,
    onLastPage,
    onNextPage,
    onPrevPage,
    onSearch,
  } = props;

  return (
    <div className={classes.root}>
      <div className={classes.buttons}>
        <Button variant="contained" color="primary" onClick={onCreateCharacter}>
          Add character
        </Button>
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
      <SearchComponent section='character' onSearch={onSearch} />
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard
              character={character}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
