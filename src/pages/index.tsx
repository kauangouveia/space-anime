import { Banner } from "@/components/Banner/Index";
import { Container } from "@/components/Container";
import { List } from "@/components/List";
import { Loading } from "@/components/Loading";
import { MyList } from "@/components/MyList";
import { TipOfDay } from "@/components/TipOfDay";
import { useListAnimeByGenre } from "@/hooks/useListAnimeByGenre";

export default function Home() {
  const { status } = useListAnimeByGenre('')
  return (
    <Container>
      <>
        {status &&
          <Loading />
        }
      </>
      <>
        {!status &&
          <>
            <Banner />
            <List genre="romance" title="ROMANCE ANIMES" />
            <List genre="action" title="ACTION ANIMES" />
            <TipOfDay />
            <List genre="adventure" title="ADVENTURE ANIMES" />
            <MyList />
          </>}
      </>
    </Container>
  )
}
