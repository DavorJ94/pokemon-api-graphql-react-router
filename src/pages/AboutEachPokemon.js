import { useState, useEffect } from "react";
import AboutPokemon from "../components/AboutPokemon";
import { pokemon } from "../graphql/requests";
import queryFetch from "../graphql/queryFetch";
import { useParams, useHistory } from "react-router-dom";
import spinner from "../images/spinner.png";
import Spinner from "../components/LoadingSpinner";

function AboutEachPokemon() {
  const [currentPokemon, setCurrentPokemon] = useState([]);
  const { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    queryFetch(pokemon, { id: id }).then((data) => {
      if (data.data.Pokemons[0]) {
        setCurrentPokemon(data.data.Pokemons);
      } else {
        history.push("/404");
      }
    });
  }, [id, history]);

  return (
    <div style={{ margin: "0 auto", textAlign: "center" }}>
      {currentPokemon.length === 0 && (
        <Spinner src={spinner} height="100px" speed="1s" />
      )}
      {currentPokemon.map((pokemon) => {
        return <AboutPokemon pokemon={pokemon} key={pokemon.id} />;
      })}
    </div>
  );
}
export default AboutEachPokemon;
