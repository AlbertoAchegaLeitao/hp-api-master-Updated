import { Character } from "../services/types";

type Props = {
  characters: Character[];
  onSelect: (character: Character) => void;
  onclose: () => void;
};

const CharacterDropdown = ({ characters, onSelect, onclose }: Props) => {
  const handleClose = () => {
    onclose(); // Call the onclose function passed as a prop
  };
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
      <div className="dropdown-item" onClick={handleClose}>
        <span className="close-btn">X</span>
      </div>
    </div>
  );
};

export { CharacterDropdown };
