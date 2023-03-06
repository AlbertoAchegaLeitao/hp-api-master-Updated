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
    console.log("handleCloseModal called");
    setIsOpen(false);
    closeModal();
    onAfterClose();
  };

  if (!character) return null;

  const customStyles = {
    content: {
      top: 50,
      bottom: 50,
      left: "50%",
      right: "auto",
      transform: "translateX(-50%)",
      width: "350px",
      borderRadius: "30px",
      backgroundColor: "white",
      /* overflow: "hidden", */
      border: "3px solid black",
    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      contentLabel={character.name}
      appElement={document.getElementById("root")!}
      style={customStyles}
    >
      <div className="modalcontent">
        <h2>{character.name}</h2>

        <img src={character.image} alt={character.name} />

        <p>
          <span>Species:</span> {character.species}
        </p>
        <p>
          <span>Gender:</span> {character.gender}
        </p>
        <p>
          <span>House:</span> {character.house}
        </p>
        <p>
          <span>Date of Birth:</span> {character.dateOfBirth}
        </p>
        <p>
          <span>Year of Birth:</span> {character.yearOfBirth}
        </p>
        <p>
          <span>Ancestry:</span> {character.ancestry}
        </p>
        <p>
          <span>Eye Colour:</span> {character.eyeColour}
        </p>
        <p>
          <span>Hair Colour:</span> {character.hairColour}
        </p>
        <p>
          <span>Wand:</span>
        </p>
        <ul>
          <li>
            <span>Wood:</span> {character.wand.wood}
          </li>
          <li>
            <span>Core:</span> {character.wand.core}
          </li>
          <li>
            <span>Length:</span> {character.wand.length}
          </li>
        </ul>
        <p>
          <span>Patronus:</span> {character.patronus}
        </p>
        <p>
          <span>Hogwarts Student:</span>{" "}
          {character.hogwartsStudent ? "Yes" : "No"}
        </p>
        <p>
          <span>Hogwarts Staff:</span> {character.hogwartsStaff ? "Yes" : "No"}
        </p>
        <p>
          <span>Actor:</span> {character.actor}
        </p>
        <p>
          <span>Alive:</span> {character.alive ? "Yes" : "No"}
        </p>
        <button className="modalbtn" onClick={handleCloseModal}>
          Close
        </button>
      </div>
    </ReactModal>
  );
};
