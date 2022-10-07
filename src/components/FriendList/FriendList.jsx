import PropTypes from 'prop-types';
import { Box } from '../Commons/Box';
import { FriendsListItem } from './FriendsListItem/FriendsListItem';

export const FriendsList = props => {
  const { friends } = props;

  return (
    <Box my={3} width="300px" as="ul">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
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
