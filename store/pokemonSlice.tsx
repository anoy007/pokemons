import {createSlice} from '@reduxjs/toolkit';

const PokemonSlice = createSlice({
    name:"pokemons",
    initialState:{
       items:[]
    },
    reducers:{
        AddPokemons(state,action){
            const item = action.payload;
            return{
                ...state,
                items:item
            }
        }
    }
})


export const PokemonActions = PokemonSlice.actions;
export default PokemonSlice;