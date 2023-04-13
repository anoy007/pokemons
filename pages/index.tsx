

import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { PokemonActions } from "../store/pokemonSlice";
import HomePage from "../components/homepage";
import Card from "@/components/shared/Cardpokemon";

export default function Home() {
  const router = useRouter();
  const page = Number(router.query.page || 1);
  const POKEMON_QUERY = gql`
{
    pokemons(first:${page > 3 ? page * 10 : 30}){
      id
      number
      name
      weight{
        minimum
        maximum
      }
      height{
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
}
`;
  const { data, loading, error } = useQuery(POKEMON_QUERY);
  const dispatch = useDispatch();

  useEffect(() => {
    {
      !loading &&
        localStorage.setItem("data", JSON.stringify(data?.pokemons || []));
    }
    dispatch(PokemonActions.AddPokemons(data?.pokemons));
  }, [page, data, loading]);

  return (
    <>
      <Card>{!loading && <HomePage data={data} />}</Card>
    </>
  );
}
