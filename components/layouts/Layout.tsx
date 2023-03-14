import { FC, PropsWithChildren } from "react"
import Head from "next/head"
import { Navbar } from '../ui';

interface Props {
    title?: string,
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<PropsWithChildren<Props>> = ({ children,title }) => {
  
  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App' }</title>
            <meta name="author" content="Mario Camacho"/>
            <meta name="description" content={`Información sobre el pokémon ${ title }`}/>
            <meta name="keywords" content={`${ title }, pokémon, pokedex`}/>
            
            <meta property="og:title" content={`Pokédex del pokémon ${title}`} />
            <meta property="og:description" content={`Esta es la pokédex sobre ${title}`} />
            <meta property="og:image" content={`${ origin }/img/banner2.png`} />
        </Head>

        <Navbar />

        <main style={{
          padding: '0px 20px'
        }}>
            { children }
        </main>
    </>
  )
}
