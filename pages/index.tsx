import { GetStaticProps } from 'next';

import { Grid } from '@nextui-org/react';

import { Layout } from "../components/layouts";
import {pokeApi} from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemons: SmallPokemon[];
}

export default function Home({ pokemons }: Props) {

  return (
    <Layout title="Listado de Pokémons">

    <Grid.Container gap={ 2 } justify='flex-start'>
      {
        pokemons.map( (pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={ pokemon }/>
        ))
      }
    </Grid.Container>

    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=493');

  // console.log(data);

  const pokemons: SmallPokemon[] = data.results.map( (pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
  }))
  

  return {
    props: {
       pokemons
    }
  }
}
