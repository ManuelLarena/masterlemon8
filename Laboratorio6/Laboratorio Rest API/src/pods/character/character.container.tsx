import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { Character } from './character.vm';
import { mapCharacterFromVmToApi } from './character.mappers';
import { CharacterComponent } from './character.component';
import { useCharacterCollection } from './character.hook';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const { id } = useParams();
  const history = useHistory();
  const {character, loadCharacter} = useCharacterCollection();

  React.useEffect(() => {
    if (id) {
      loadCharacter(id);
    }
  }, [id]);

  const handleSave = async (character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
    const successCharacter = await api.saveCharacter(apiCharacter);

    if (successCharacter) {
      history.goBack();
    } else {
      alert('Error on save character');
    }
  };

  return <CharacterComponent character={character} onSave={handleSave} />;
};
