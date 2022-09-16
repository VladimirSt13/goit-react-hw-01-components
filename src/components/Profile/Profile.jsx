import PropTypes from 'prop-types';
import { Box } from '../Commons/Box';
import { Avatar, Name, Tag, Location, Stats } from './Profile.styled';
import { StatElement } from './StatElement/StatElement';

export const Profile = props => {
  const { username, tag, location, avatar, stats } = props;
  return (
    <Box
      m={3}
      bg="white"
      width="320px"
      overflow="hidden"
      border="normal"
      borderColor="grey"
      borderRadius="normal"
      boxShadow="0px 1px 3px #2b2b2b71"
    >
      <Box p={5} display="flex" alignItems="center" flexDirection="column">
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Box>

      <Stats>
        <StatElement name="Followers" stats={stats} />
        <StatElement name="Views" stats={stats} />
        <StatElement name="Likes" stats={stats} />
      </Stats>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
