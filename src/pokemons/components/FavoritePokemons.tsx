'use client';

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import pokemons from '@/store/pokemons/pokemons';

export const FavoritePokemons = () => {

  const favoritePokemons = useAppSelector( state => Object.values( state.pokemons.favorites) );
  // const [pokemons, setPokemons] = useState( favoritePokemons );

  // useEffect(() => {
  //   setPokemons(favoritePokemons);
  // }, [favoritePokemons]);
  
  return (
    <>
      {
        favoritePokemons.length === 0
          ? (<NoFavorites />)
          : (<PokemonGrid pokemons={ favoritePokemons }/>)
        }
          
    </>
    
  )
}

export const NoFavorites = () => {
    return(
      <div className="flex flex-col h-[50vh] items-center justify-center">
        <IoHeartOutline size={100} className="text-red-500" />
        <span>No hay favoritos</span>
      </div>
    )
  }
