import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { usePagination } from 'common/components/pagination';

export const CharacterCollectionContainer: React.FC = () => {
  const {
    characterCollection,
    totalPages,
    loadCharacterCollection,
    loadSearchCharacterCollection,
  } = useCharacterCollection();
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
    loadCharacterCollection(page);
  }, [page]);

  React.useEffect(() => {
    loadSearchCharacterCollection(name);
  }, [name]);

  const handleCreateCharacter = () => {
    history.push(linkRoutes.createCharacter);
  };

  const handleEdit = (id: string) => {
    history.push(linkRoutes.editCharacter(id));
  };

  const handleDelete = async (id: string) => {
    await deleteCharacter(id);
    loadCharacterCollection(page);
  };

  const handleSearchCharacterCollection = () => {
    const nameValue = (document.getElementById(
      'search-input'
    ) as HTMLInputElement).value.toLowerCase();
    setName(nameValue);
    nameValue ? setLastPage(true) : setLastPage(false);
  };

  return (
    <CharacterCollectionComponent
      page={page}
      totalPages={totalPages}
      isFirstPage={isFirstPage}
      isLastPage={isLastPage}
      characterCollection={characterCollection}
      onCreateCharacter={handleCreateCharacter}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onFirstPage={handleFirstPage}
      onLastPage={handleLastPage}
      onPrevPage={handlePrevPage}
      onNextPage={handleNextPage}
      onSearch={handleSearchCharacterCollection}
    />
  );
};
