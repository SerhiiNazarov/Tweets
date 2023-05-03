import { Link, Outlet } from 'react-router-dom';
import Container from '../../components/Container/Container';
import { Wrapper, Btn, Text } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <Wrapper>
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
