import { SmallPokemon } from "../../interfaces";
import { Grid, Card, Row, Text} from "@nextui-org/react";
import { FC, PropsWithChildren } from "react";
import { useRouter } from 'next/router';

interface Props {
  pokemon: SmallPokemon
}

export const PokemonCard: FC<PropsWithChildren<Props>> = ({ pokemon }) => {

  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${pokemon.name}`);
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
      <Card isHoverable isPressable css={{ dropShadow: "none" , border: "1px solid #999999"}} onClick={ onClick }>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={pokemon.img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text weight="bold" transform="capitalize">{pokemon.name}</Text>
            <Text weight="bold"># {pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
