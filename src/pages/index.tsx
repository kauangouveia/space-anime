import { Banner } from "@/components/Banner/Index";
import { Container } from "@/components/Container";
import { List } from "@/components/List";
import { MyList } from "@/components/MyList";
import { TipOfDay } from "@/components/TipOfDay";


export default function Home() {

  return (
    <Container>
      <Banner />
      <List genre="romance" title="ROMANCE ANIMES" />
      <List genre="action" title="ACTION ANIMES" />
      <TipOfDay />
      <List genre="adventure" title="ADVENTURE ANIMES" />
      <MyList />
    </Container>
  )
}
