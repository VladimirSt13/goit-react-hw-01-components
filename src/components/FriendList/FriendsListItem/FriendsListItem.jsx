import PropTypes from 'prop-types';
import { FriendItem, Status, Avatar, Name } from './FriendsListItem.styled';

export const FriendsListItem = props => {
  const { avatar, name, isOnline } = props;
  return (
    <FriendItem>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendItem>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
