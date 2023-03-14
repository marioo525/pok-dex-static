import Image from "next/image";
import NextLink from 'next/link'; 
import { Spacer, Text, useTheme, Link } from "@nextui-org/react";

export const Navbar = () => {

  const { theme } = useTheme();

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray100.value,
        borderBottom: '1px solid #999999'
    }}>
        {/* <Text color='white' h2>P</Text>
        <Text color='white' h3>okémon</Text> */}
        <Image 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png"
          alt="Icono de la app"
          width={70}
          height={70}
        />
        
          <Link href="/" as={NextLink}>
            <img src="/logopokemon.png" alt="Logo Pokémon" style={{ maxWidth: '115px', maxHeight: '75px', padding: '10px 5px 10px 5px' }} />
          </Link>

        <Spacer css={{ flex: 1 }}/>

          <Link href="/favorites" as={NextLink}>
            <Text color='#ffcb05' style={{ fontFamily: "PokemonSolid", textShadow: '0 0 5px #3c5aa6, 0 0 10px #3c5aa6' }}>Favoritos</Text>
          </Link>
    </div>
  )
}
