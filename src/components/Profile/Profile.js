import PropTypes from 'prop-types';
import {
  ProfileWrapper,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = props => {
  const { username, tag, location, avatar, stats } = props;
  return (
    <ProfileWrapper>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Stats>
        <li>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <span>{stats.views}</span>
        </li>
        <li>
          <Label>Likes</Label>
          <span>{stats.likes}</span>
        </li>
      </Stats>
    </ProfileWrapper>
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
