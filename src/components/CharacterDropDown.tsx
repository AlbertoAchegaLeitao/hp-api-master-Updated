import { Character } from "../services/types";

type Props = {
  characters: Character[];
  onSelect: (character: Character) => void;
};

const CharacterDropdown = ({ characters, onSelect }: Props) => {
  return (
    <div className="dropdown">
      {characters.map((character) => (
        <div
          className="dropdown-item"
          key={character.id}
          onClick={() => onSelect(character)}
        >
          {character.name}
        </div>
      ))}
    </div>
  );
};

export { CharacterDropdown };
