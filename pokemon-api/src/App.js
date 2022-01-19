import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([]);

  //vanilla js fetch
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

  //axios fetch
  const axiosPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=810")
    //axios wraps response in .data object
    .then(response => {
      console.log(response.data.results);
      setPokemon(response.data.results);
    })
    .catch(error => console.log(error))
  }

  return (
    <div className="App">
      <h2>Pokemon ╰(*°▽°*)╯</h2>
      <hr />
      <button onClick={catchPokemon}>Gotta catch 'em all!</button>
      <button onClick={axiosPokemon}>AXIOS Catch 'em all!</button>
      <hr />
      {/* {JSON.stringify(pokemon)} */}

      {
        pokemon.map( (mon, index) => {
          return (
            <p key={index}>
              {mon.name}
            </p>
          ) 
        })
      }
    

    </div>
  );
}

export default App;
