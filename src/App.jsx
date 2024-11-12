import useCustomHook from './hooks/useCustomHook';
import TemplateCharacter from './components/TemplateCharacter'
import './App.css';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';
  
  const {data : pokemon} = useCustomHook(urlPokemon)
  const {data : rick} = useCustomHook(urlRick)

  return (
    <>
    {!pokemon ? '...loading' : <TemplateCharacter title='Personaje Pokemon'        name={pokemon.name} image={pokemon.sprites?.front_default}/>}
    {!rick ? '...loading'    : <TemplateCharacter title='Personaje Rick and Morty' name={rick.name}    image={rick.image}/>}
    </>
  );
}

export default App;
