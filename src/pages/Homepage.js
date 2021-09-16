import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";
import { allPokemons } from "../graphql/requests";
import queryFetch from "../graphql/queryFetch";
import Pokemon from "../components/Pokemon";
import spinner from "../images/spinner.png";
import Spinner from "../components/LoadingSpinner";

function Homepage() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    queryFetch(allPokemons).then((data) => setPokemons(data.data.Pokemons));
  }, []);

  return (
    <div>
      <div className={styles.container}>
        {pokemons.length === 0 && (
          <Spinner src={spinner} height="160px" speed="1s" />
        )}
        {pokemons.map((pokemon) => {
          return (
            <Link to={`/about/${pokemon.id}`} key={pokemon.id}>
              <Pokemon name={pokemon.name} src={pokemon.sprite} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Homepage;
