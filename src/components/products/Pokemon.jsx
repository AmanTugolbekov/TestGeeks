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
    <div>
      {" "}
      <PokemonVerstka pokemon={pokemon} />
    </div>
  );
};

export default Pokemon;
