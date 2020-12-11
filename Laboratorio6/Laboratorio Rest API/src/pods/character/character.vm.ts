export interface Character {
  id: string;
  name: string;
  gender: string;
  species: string;
  status: string;
  comment: string
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  gender: '',
  species: '',
  status: '',
  comment: '',
});

