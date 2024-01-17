import Grid from "./ui/grid/grid";
import Title from "./ui/title/title";
import Container from "./ui/container/container";
import TextCards from "./ui/text-cards/text-cards";
import data from './data/data.json'

export default function Homepage() {
  return (
    <>
      <Container>
        <Title level={2}>Our Services</Title>
        <TextCards content={data.services} />
        <Title level={2}>Our projects</Title>
      </Container>
      <Grid works={data.works}
      />

      <Container>
        <Title level={2}>About us</Title>
        <TextCards content={data.people} />
        <Title level={2}>Contact</Title>
      </Container>
    </>
  )
}
