import { Grid, Skeleton, Container } from '@mantine/core';

const child = <Skeleton height={140} radius="md" style={{boxShadow: '5px 5px 5px grey'}}/>

export function Grids() {
  return (
    <Container style={{marginLeft: '-100px'}}  >
      <Grid style={{width: '150%'}} >
        <Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
      </Grid>
    </Container>
  );
}