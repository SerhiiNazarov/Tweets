import {
  Container,
  LogoImg,
  Ellipse,
  Avatar,
  Tweets,
  Follow,
  Btn,
  Numbers,
} from './UserCard.styled';
import Logo from '../../images/Logo.png';

import Boy from '../../images//Boy.png';
import useLocalStorage from '../../helpers/useLocalStorage';

function UserCard({ user: { user, avatar, followers, tweets } }) {
  const [isFollow, setIsFollow] = useLocalStorage(`${user}isFollow`, true);
  const [userFollowers, setUserFollowers] = useLocalStorage(
    `${user}userFollowers`,
    followers
  );
  const [bgBtn, setBgBtn] = useLocalStorage(`${user}bgBtn`, '#EBD8FF');

  const onClick = () => {
    setIsFollow(isFollow => !isFollow);

    if (isFollow) {
      setUserFollowers(Number(userFollowers + 1));
      setBgBtn('#5CD3A8');
      return;
    }

    setUserFollowers(Number(userFollowers - 1));
    setBgBtn('#EBD8FF');
  };

  return (
    <Container>
      <LogoImg src={Logo} />
      <Ellipse>
        <Avatar src={avatar ? avatar : Boy} />
      </Ellipse>
      <Tweets>
        <Numbers>{tweets}</Numbers> Tweets
      </Tweets>
      <Follow>
        <Numbers>{userFollowers.toLocaleString('en-US')}</Numbers> Followers
      </Follow>
      <Btn
        type="button"
        onClick={onClick}
        style={{ backgroundColor: `${bgBtn}` }}
      >
        {isFollow ? 'Follow' : 'Following'}
      </Btn>
    </Container>
  );
}

export default UserCard;
