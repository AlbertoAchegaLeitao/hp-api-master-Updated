import { useCharacterSearch } from "../services/getapi";
import { CharacterModal } from "./CharacterModal";
import { CharacterDropdown } from "./CharacterDropDown";

const Home = () => {
  const {
    searchValue,
    setSearchValue,
    characters,
    matchingCharacters,
    submitted,
    handleSubmit,
    handleInputChange,
    handleSelectCharacter,
    showDropdown,
    handleCloseDropdown, // Add the handleCloseDropdown function
  } = useCharacterSearch();

  const handleCloseModal = () => {
    setSearchValue("");
  };

  return (
    <div className="homeparent">
      <div className="homecontainer">
        <h1>Search Characters Here</h1>
        <form className="searchform" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Search Character"
            value={searchValue}
            onChange={handleInputChange}
          />
          <div className="box-1">
            <div className="btn btn-one">
              <span>Search</span>
            </div>
          </div>
        </form>
        {showDropdown && (
          <CharacterDropdown
            characters={matchingCharacters}
            onSelect={handleSelectCharacter}
            onclose={handleCloseDropdown} // Pass the handleCloseDropdown function
          />
        )}
        {submitted && characters.length === 0 ? (
          <p>No character found with name "{searchValue}".</p>
        ) : characters.length > 0 ? (
          <div>
            {characters.map((character) => (
              <div key={character.id}>
                <CharacterModal
                  character={character}
                  closeModal={() => {}}
                  onAfterClose={handleCloseModal}
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
