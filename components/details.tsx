import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokemonEvolution from "./pokemonevo";

export default function Details() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const poke = router.query.pokemon;
  const modelHandler = () => {
    setIsOpen(!isOpen);
  };
  if (typeof window !== "undefined") {
    var ctx = JSON.parse(localStorage.getItem("data") || "{}");
  }
  const filtered = ctx?.filter((p: any) => p.name === poke) || [];

  return (
    <>
      {filtered.length ? (
        <div className="container details">
          <section className="details-header">
            <div className="title">
              <div className="title2">
                {filtered[0].name}
                <span className="title-number">#0{filtered[0].number}</span>
              </div>
            </div>
          </section>
          <section className="pokemon-details ">
            <div className="column-6 left-profile">
              <div className="profile-image">
                <img
                  src={filtered[0].image}
                  alt="name"
                  className="rounded-lg"
                />
              </div >
              <div className="flex place-content-center mt-4 ">
              <button onClick={modelHandler} className="border-box  border-2 border-blue-500 rounded-lg bg-blue-100 text-blue-500 text-sm font-sans p-1">Check Evolution</button>
              </div>
              
            </div>
            <div className="column-6 right-profile">
              <div className="pokemon-details-right">
                <div className="description">
                  <p className="">{filtered[0].classification}</p>
                </div>
                <h3 className="version-title">Version :  NA</h3>
                <div className="version-lables">
                  <span>
                    <i></i>
                  </span>
                  <span>
                    <i></i>
                  </span>
                </div>

                <div className="pokemon-ability">
                  <div className="left">
                    <ul>
                      <li>
                        <span className="att-title">Height</span>
                        <span className="att-value">{filtered[0].height.minimum}</span>
                      </li>
                      <li>
                        <span className="att-title">Weight</span>
                        <span className="att-value">{filtered[0].weight.minimum}</span>
                      </li>
                      <li>
                        <span className="att-title">Gender</span>
                        <span className="att-value">male</span>
                      </li>
                    </ul>
                  </div>
                  <div className="right">
                    <ul>
                      <li>
                        <span className="att-title">Max CP</span>
                        <span className="att-value">{filtered[0].maxCP}</span>
                      </li>
                      <li>
                        <span className="att-title">Max HP</span>
                        <span className="att-value">{filtered[0].maxHP}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pokemon-attributes">
                  <div className="type">
                    <h3>Type</h3>
                    <ul>
                      {filtered[0].types[0] ? (
                        <li className="fire">
                          <a href="#2">{filtered[0].types[0]}</a>
                        </li>
                      ) : null}
                      {filtered[0].types[1] ? (
                        <li className="flying">
                          <a href="#2">{filtered[0].types[1]}</a>
                        </li>
                      ) : null}
                    </ul>
                  </div>
                  <div className="weaknesses">
                    <h3>Weaknesses</h3>
                    {/* <div className="w-full aspect-video">
              <small>
                <p>water</p>
              </small>
              <small>
                <p>fire</p>
              </small>
            </div> */}
                    <ul>
                      {filtered[0].weaknesses[0] ? (
                        <li className="first">
                          <a href="#f">{filtered[0].weaknesses[0]}</a>
                        </li>
                      ) : null}
                      {filtered[0].weaknesses[1] ? (
                        <li className="mid">
                          <a href="#m">{filtered[0].weaknesses[1]}</a>
                        </li>
                      ) : null}
                      {filtered[0].weaknesses[2] ? (
                        <li className="last">
                          <a href="#l">{filtered[0].weaknesses[2]}</a>
                        </li>
                      ) : null}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div>No Pokemon found</div>
      )}
      {isOpen && <PokemonEvolution setOpen={setIsOpen} isOpen={isOpen}/>}
    </>
  );
}
