import { useEffect } from "react";
import { useState } from "react";

import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [max, setMax] = useState(9);
  const [min, setMin] = useState(0);

  function getPokemons() {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
      .then((response) => response.json())
      .then((res) => setPokemons(res.results));
  }

  function changePokemons() {
    setMax(max + 9);
    setMin(min + 9);
  }

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="App">
      <button onClick={() => changePokemons()}> Fecht Pokemons </button>
      <ul>
        {pokemons.slice(min, max).map((pokemon) => {
          return <li key={pokemon.name}> {pokemon.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
