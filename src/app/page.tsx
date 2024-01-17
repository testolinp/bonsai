import Grid from "./ui/grid/grid";
import Title from "./ui/title/title";
import Container from "./ui/container/container";

export default function Homepage() {
  return (
    <>
      
      <Container>
        <Title level={2}>Our projects</Title>
      </Container>
      <Grid></Grid>

      <Container size="xl">
        <Title level={2}>About us</Title>

        <Title level={2}>Contact</Title>
      </Container>
    </>
  )
}
