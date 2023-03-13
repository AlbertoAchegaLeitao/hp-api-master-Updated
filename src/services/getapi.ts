import { useState } from "react";
import { Character } from "../services/types";

export const useCharacterSearch = () => {
  const charactersURL = "https://hp-api.onrender.com/api/characters";
  const [searchValue, setSearchValue] = useState("");
  const [characters, setCharacters] = useState<Character[]>([]);
  const [matchingCharacters, setMatchingCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const [submitted, setSubmitted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!searchValue) return;
    setCharacters([]); // Clear previous search results

    const lowercaseSearchValue = searchValue.toLowerCase(); // Convert input to lowercase

    fetch(charactersURL)
      .then((response) => response.json())
      .then((data: Character[]) => {
        const words = lowercaseSearchValue.split(" "); // Use lowercase search value
        const filteredCharacters = data.filter((character: Character) => {
          const lowercaseName = character.name.toLowerCase(); // Convert name to lowercase
          const nameWords = lowercaseName.split(" ");
          return words.every((word) => nameWords.includes(word));
        });

        if (filteredCharacters.length > 1) {
          setMatchingCharacters(filteredCharacters);
          setShowDropdown(true);
          return;
        }

        setCharacters(filteredCharacters);
        setSelectedCharacter(filteredCharacters[0] || null);
        setSubmitted(true);
        setShowDropdown(false);
      })
      .catch((error) => console.error(error));
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const words = value.split(" ");
    const filteredCharacters = characters.filter((character: Character) => {
      const lowercaseName = character.name.toLowerCase(); // Convert name to lowercase
      const nameWords = lowercaseName.split(" ");
      return words.every((word) => nameWords.includes(word));
    });
    setMatchingCharacters(filteredCharacters);
    setShowDropdown(filteredCharacters.length > 1);
    setSearchValue(value);
    setSelectedCharacter(null);
  };

  const handleSelectCharacter = (character: Character) => {
    setSelectedCharacter(character);
    setCharacters([character]);
    setSubmitted(true);
    setShowDropdown(false);
  };
  const handleCloseDropdown = () => {
    // Add a new function to handle closing the dropdown
    setShowDropdown(false);
  };

  const handleButtonClick = () => {
    // Call handleSubmit when the button is clicked
    handleSubmit(new Event("submit") as any);
  };

  return {
    searchValue,
    setSearchValue,
    characters: selectedCharacter ? [selectedCharacter] : [],
    matchingCharacters,
    submitted,
    handleSubmit,
    handleInputChange,
    handleSelectCharacter,
    showDropdown,
    handleCloseDropdown, // Add the new function to the returned object
    handleButtonClick,
  };
};
