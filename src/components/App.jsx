import { Profile } from './Profile/Profile';
import { Container } from './Commons/Container/Container';
import user from '../json/user.json';

export const App = () => {
  return (
    <Container title="React HW-01">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Container>
  );
};
