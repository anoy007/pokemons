import { gql } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HomePage from "../components/homepage";
import Card from "@/components/shared/Cardpokemon";
import { realData } from "../constants/dataContants";

export default function Home() {
  const router = useRouter();
  const page = Number(router.query.page || 1);
  const [items, setItems] = useState(realData?.data);
  if(typeof window !== "undefined" && page === 1){
    localStorage.setItem("data", JSON.stringify(realData?.data.pokemons || []));
  }
  const [loading, setLoading] = useState(false);
  

  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/",
    cache: new InMemoryCache(),
  });

  const POKEMON_QUERY = gql`
{
    pokemons(first:${page > 1 ? page * 20 : 20}){
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

  const getData = async () => {
    if (page > 1) {
      setLoading(true);
      try {
        const response = await client.query({
          query: POKEMON_QUERY,
        });
        const { data, loading } = response;
        localStorage.setItem("data", JSON.stringify(data.pokemons || []));
        setItems(data);
        if (data?.pokemons.length) {
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <>
      <Card>
        <HomePage data={items} loading={loading} />
      </Card>
    </>
  );
}
