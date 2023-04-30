import { Link, Outlet } from "react-router-dom";
import Container from "../../components/Container/Container";
import { Wrapper, Btn, BackgroundImg, Text } from "./Home.styled";
import Background from "../../images/background.png";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <BackgroundImg src={Background} />
        <Text>Tweets and Followers</Text>
        <Link to="tweets">
          <Btn>Tweets</Btn>
        </Link>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default Home;
