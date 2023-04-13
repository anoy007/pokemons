import { configureStore } from "@reduxjs/toolkit";
import PokemonSlice from "./pokemonSlice";

const Store = configureStore({
    reducer:{
        pokemons:PokemonSlice.reducer
    }
})

export default Store;
