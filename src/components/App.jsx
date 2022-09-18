import { Box } from './Commons/Box';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';

export const App = () => {
  return (
    <Box width="1024px" mx="auto">
      <Box display="flex" mb={4}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Box>
          <Statistics title="Upload stats" stats={data} />
          <Statistics stats={data} />
        </Box>
        <FriendsList friends={friends} />
      </Box>
      <TransactionHistory items={transactions} />
    </Box>
  );
};
