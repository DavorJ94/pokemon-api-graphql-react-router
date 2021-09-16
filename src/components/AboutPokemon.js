import styles from "../styles/AboutPokemon.module.css";

const AboutPokemon = ({ pokemon }) => {
  return (
    <div key={pokemon.id}>
      <div className={styles.container}>
        <img
          width="150"
          height="150"
          alt="Pokemon img"
          src={pokemon.sprite}
          className={styles.pokemonImg}
        ></img>
        <div className={styles.pokemonName}>{pokemon.name}</div>
        <div className={styles.separator}>
          <span className={styles.heightWeight}>
            Species: <span className={styles.abilities}>{pokemon.species}</span>
          </span>
        </div>
        <div className={styles.separator}>
          <span className={styles.heightWeight}>Types:</span>
          {pokemon.types.map((type, index) => {
            if (index < pokemon.types.length - 1)
              return (
                <span className={styles.abilities} key={`types-${index}`}>
                  {" "}
                  {type},
                </span>
              );
            else
              return (
                <span className={styles.abilities} key={`types-${index}`}>
                  {" "}
                  {type}.
                </span>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutPokemon;
