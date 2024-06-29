import React, { useEffect, useState } from "react";
import { API } from "../../helpers/const";
import PokemonVerstka from "./PokemonVerstka";
import axios from "axios";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const APIfunc = async () => {
    const { data } = await axios(API);
    const { results } = data;
    console.log(results);
    setPokemon(results);
  };
  useEffect(() => {
    APIfunc();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: "2rem",
        gap: "3rem",
      }}
    >
      {pokemon.map((elem) => (
        <PokemonVerstka key={elem.id} pokemon={elem} />
      ))}
    </div>
  );
};

export default Pokemon;
