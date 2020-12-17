import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import {
  createEmptyCharacter,
  Character,
} from './character.vm';
import {
  mapCharacterFromApiToVm,
  mapCharacterFromVmToApi,
} from './character.mappers';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );
  const { id } = useParams();
  const history = useHistory();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    console.log(apiCharacter);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  const handleSave = async (character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
    const successCharacter = await api.saveCharacter(apiCharacter);

    if (successCharacter) {
      history.goBack();
    } else {
      alert('Error on save character');
    }
  };

  return (
    <CharacterComponent
      character={character}
      onSave={handleSave}
    />
  );
};
