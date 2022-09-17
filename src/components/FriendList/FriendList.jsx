import PropTypes from 'prop-types';
import { Box } from '../Commons/Box';
import { FriendItem, Status, Avatar, Name } from './FriendList.styled';

export const FriendsList = props => {
  const { friends } = props;

  return (
    <Box m={3} width="300px" as="ul">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem key={id}>
          <Status isOnline={isOnline}></Status>
          <Avatar src={avatar} alt={name} width="48" />
          <Name>{name}</Name>
        </FriendItem>
      ))}
    </Box>
  );
};

FriendsList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
