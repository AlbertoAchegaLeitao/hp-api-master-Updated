export interface Character {
  id: number;
  name: string;
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: string;
    core: string;
    length: string;
  };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alive: boolean;
  image: string;
}
