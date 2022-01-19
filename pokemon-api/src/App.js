import './App.css';
import React, { useState } from 'react';

function App() {

  const [pokemon, setPokemon] = useState([]);

  const catchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=810")
    .then( response => {
      return response.json();
    }).then(jsonResponse => {
      console.log(jsonResponse.results);
      setPokemon(jsonResponse.results);
    }).catch( error => {
      console.log(error)
    });
  }

  return (
    <div className="App">
      <h2>Pokemon ╰(*°▽°*)╯</h2>
      <hr />
      <button onClick={catchPokemon}>Catch Pokemon!</button>
      <hr />
      {/* {JSON.stringify(pokemon)} */}

      {
        pokemon.map( (mon, index) => {
          return (
            <p>
              {mon.name}
            </p>
          ) 
        })
      }
    

    </div>
  );
}

export default App;
