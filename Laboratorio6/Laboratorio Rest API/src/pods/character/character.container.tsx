import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { saveCharacter } from './api';
import { Character } from './character.vm';
import {
  mapCharacterFromVmToApi,
} from './character.mappers';
import { useCharacter } from './character.hook';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const { character, loadCharacter } = useCharacter();
  const { id } = useParams();
  const history = useHistory();

  React.useEffect(() => {
    if (id) {
      loadCharacter(id);
    }
  }, [id]);

  const handleSave = async (character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
    const successCharacter = await saveCharacter(apiCharacter);

    if (successCharacter) {
      history.goBack();
    } else {
      alert('Error on save character');
    }
  };

  return <CharacterComponent character={character} onSave={handleSave} />;
};
