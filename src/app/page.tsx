import Grid from "./ui/grid/grid";
import Title from "./ui/title/title";
import Container from "./ui/container/container";
import TextCards from "./ui/text-cards/text-cards";

export default function Homepage() {
  return (
    <>
      <Container>
        <Title level={2}>Our projects</Title>
      </Container>
      <Grid></Grid>

      <Container>
        <Title level={2}>About us</Title>
        <TextCards content={[{
            image: '/images/works/work-6.jpeg',	
            title: 'Pato',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni explicabo laudantium temporibus cupiditate soluta cum et pariatur veniam eius a sapiente ullam ipsa molestiae recusandae delectus, adipisci aliquid id distinctio.'
          }, {
            image: '/images/works/work-6.jpeg',
            title: 'Brian',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni explicabo laudantium temporibus cupiditate soluta cum et pariatur veniam eius a sapiente ullam ipsa molestiae recusandae delectus, adipisci aliquid id distinctio.'
          }]} 
        />
        <Title level={2}>Contact</Title>
      </Container>
    </>
  )
}
