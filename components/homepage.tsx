import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function HomePage(props: any) {
  const { data, loading } = props;
  const finalData = data.pokemons || [];
  const [items, setItems] = useState(data?.pokemons || []);
  const router = useRouter();
  const page = Number(router.query.page || 1);

  const pagination = (data: any, page: any) => {
    let i = 20 * (page - 1);
    let j = 20 * page;
    let arr1 = data.slice(i, j);

    return arr1;
  };

  useEffect(() => {
    var ctx = JSON.parse(localStorage.getItem("data") || "{}");
    var ctx1: any = pagination(finalData, page);
    setItems(ctx1);
  }, [page, finalData]);

  const pokemons = items?.map((p: any) => {
    return (
      <li
        key={p.id}
        className="h-50 w-50 p-2 m-2 border-box border-2 rounded-lg border-blue-300"
      >
        <section>
          <img
            src={p.image}
            alt={p.name}
            className="rounded-lg cursor-pointer pokemon-image"
            onClick={() => {
              router.push(`/${p.name}`);
            }}
          />
          <p className="ml-2 text-blue-300">#0{p.number}</p>
          <h3 className="ml-2 mb-2 text-blue-500">{p.name}</h3>
          <div className="flex gap-4 ml-2 mb-2">
            {p.types[0] ? (
              <small className="box-border bg-blue-200 w-20 border-1  rounded-lg text-center ">
                {p.types[0]}
              </small>
            ) : null}
            {p.types[1] ? (
              <small className="box-border bg-orange-200 w-20 border-1  rounded-lg text-center">
                {p.types[1]}
              </small>
            ) : null}
          </div>
        </section>
      </li>
    );
  });
  return (
    <>
      {loading ? (
        <>
          <h1 className="text-blue-400 text-center mb-4">LOADING...</h1>
        </>
      ) : (
        <div className="mb-4 ml-60 mr-60 homepage">
          <ul className="flex flex-wrap place-content-center mb-2">
            {pokemons}
          </ul>
          {items.length ? (
            <div className="pagination mb-4">
              {page !== 1 && <Link href="/?page=1">1</Link>}
              {page > 2 ? (
                <Link href={`/?page=${page - 1}`}>{page - 1}</Link>
              ) : null}
              <Link href={`/?page=${page}`} className="active">
                {page}
              </Link>
              <Link href={`/?page=${page + 1}`}>{page + 1}</Link>
            </div>
          ) : (
            <h1 className="text-black-200 text-center">NO POKEMON FOUND</h1>
          )}
        </div>
      )}
    </>
  );
}
