import React from "react";
import styles from "../styles/Pokemon.module.css";

function Pokemon({ name, src }) {
  return (
    <div className={styles.pokemonContainer}>
      <img
        width="115.2"
        height="115.2"
        src={src}
        className={styles.pokemonImg}
        alt="poke img"
      ></img>
      <p className={styles.pokemonName}>{name}</p>
    </div>
  );
}

export default Pokemon;
