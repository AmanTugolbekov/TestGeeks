import axios from "axios";
import React from "react";

const PokemonVerstka = ({ pokemon }) => {
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
        <div
          style={{
            display: "flex",
            backgroundColor: "lightblue",
            width: "25rem",
            height: "10rem",
            borderRadius: "1rem",
            justifyContent: "center",
            alignItems: "center",
            gap: "9rem",
          }}
        >
          <img style={{ height: "6rem" }} src={elem.url.data} alt={elem.name} />
          <span>{elem.name}</span>
        </div>
      ))}
    </div>
  );
};

export default PokemonVerstka;
