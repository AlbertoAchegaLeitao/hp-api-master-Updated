import React, { useState } from "react";
import ReactModal from "react-modal";
import { Character } from "../services/types";

interface Props {
  character: Character | null;
  closeModal: () => void;
  onAfterClose: () => void;
}

export const CharacterModal = ({
  character,
  closeModal,
  onAfterClose,
}: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseModal = () => {
    setIsOpen(false);
    closeModal();
    onAfterClose();
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  if (!character) return null;

  return (
    <ReactModal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={handleCloseModal}
      contentLabel={character.name}
    >
      <div className="x">
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>House: {character.house}</p>
        <p>Date of Birth: {character.dateOfBirth}</p>
        <p>Year of Birth: {character.yearOfBirth}</p>
        <p>Ancestry: {character.ancestry}</p>
        <p>Eye Colour: {character.eyeColour}</p>
        <p>Hair Colour: {character.hairColour}</p>
        <p>Wand:</p>
        <ul>
          <li>Wood: {character.wand.wood}</li>
          <li>Core: {character.wand.core}</li>
          <li>Length: {character.wand.length}</li>
        </ul>
        <p>Patronus: {character.patronus}</p>
        <p>Hogwarts Student: {character.hogwartsStudent ? "Yes" : "No"}</p>
        <p>Hogwarts Staff: {character.hogwartsStaff ? "Yes" : "No"}</p>
        <p>Actor: {character.actor}</p>
        <p>Alive: {character.alive ? "Yes" : "No"}</p>
        <button onClick={handleCloseModal}>Close</button>
      </div>
    </ReactModal>
  );
};
