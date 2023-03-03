import { useState } from "react";
import { Character } from "../services/types";

export const useCharacterSearch = () => {
  const charactersURL = "https://hp-api.onrender.com/api/characters";
  const [searchValue, setSearchValue] = useState("");
  const [characters, setCharacters] = useState<Character[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!searchValue) return;

    fetch(charactersURL)
      .then((response) => response.json())
      .then((data: Character[]) => {
        const words = searchValue.split(" ");
        const filteredCharacters = data.filter((character: Character) => {
          const nameWords = character.name.toLowerCase().split(" ");
          return words.every((word) => nameWords.includes(word));
        });
        setCharacters(filteredCharacters);
        setSubmitted(true);
      })
      .catch((error) => console.error(error));
  }

  return {
    searchValue,
    setSearchValue,
    characters,
    submitted,
    handleSubmit,
  };
};
