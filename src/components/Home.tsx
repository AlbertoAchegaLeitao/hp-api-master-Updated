import { useCharacterSearch } from "../services/getapi";
import { CharacterModal } from "./CharacterModal";

const Home = () => {
  const { searchValue, setSearchValue, characters, submitted, handleSubmit } =
    useCharacterSearch();

  const handleCloseModal = () => {
    // Update the state of the parent component when the modal is closed
    setSearchValue("");
  };

  return (
    <div className="homecontainer">
      <h1>Search Characters Here</h1>
      <form className="searchform" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Search Character"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value.toLowerCase())}
        />

        <button className="homebtn" type="submit">
          Search
        </button>
      </form>
      {submitted && characters.length === 0 ? (
        <p>No character found with name "{searchValue}".</p>
      ) : characters.length > 0 ? (
        <div>
          {characters.map((character) => (
            <div key={character.id}>
              {/* Pass the handleCloseModal function as the onAfterClose prop */}
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
  );
};

export default Home;
