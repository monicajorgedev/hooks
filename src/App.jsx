import useFecthCharacters from './hooks/useFecthCharacters';
import './App.css';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';
  
  const FetchPokemon = useFecthCharacters(urlPokemon)
  const FetchRick = useFecthCharacters(urlRick)

  return (
    <>
      <h2>Personaje Pokemon</h2>
      <p>{FetchPokemon.character}</p>
      <img src={FetchPokemon.imgUrl}  />

      <h2>Personaje Rick and Morty</h2>
      <p>{FetchRick.character}</p>
      <img src={FetchRick.imgUrl}  />
    </>
  );
}

export default App;
