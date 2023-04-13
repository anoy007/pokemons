
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import EvolutionModal from "./evolutionModal";

const PokemonEvolution = (props: any) => {
  const [items, setItems] = useState([]);
  const [loading, SetLoading] = useState(true);
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/",
    cache: new InMemoryCache(),
  });

  const router = useRouter();
  const pokeName = router.query.pokemon;
  if (typeof window !== "undefined") {
    var ctx = JSON.parse(localStorage.getItem("data") || "{}");
  }
  const Evol_Query = gql`
    query pokemon($name: String) {
      pokemon(name: $name) {
        id
        name
        image
        evolutions {
          id
          number
          name
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
    }
  `;
  const getData = async () => {
    const res: any = await client.query({
      query: Evol_Query,
      variables: {
        name: pokeName,
      },
    });
    const { data, loading } = res;
    if (!loading) {
      setItems(data);
      SetLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);


  const { setOpen, isOpen } = props;
  const closeHandler = () => {
    setOpen(false);
  };

  return (
    <>
      {!loading && <EvolutionModal closeHandler={closeHandler} data={items} />}
    </>
  );
};

export default PokemonEvolution;
