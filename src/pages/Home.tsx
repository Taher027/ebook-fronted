import HomeBookItems from "../components/HomeBooks/HomeBookItems";
import HomeBanner from "../components/ui/HomeBanner";
import Container from "../layouts/Container";

const Home = () => {
  return (
    <>
      <HomeBanner></HomeBanner>
      <Container>
        <HomeBookItems />
      </Container>
    </>
  );
};

export default Home;
