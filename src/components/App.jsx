import user from '../data/user.json'
import data from '../data/data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'

// D:\IT\goit-react-hw-01-components\src\data\user.json
import Profile from './Profile/Profile'


import Statistics from './Statistics/Statistics'


import FriendList from './FriendList/FriendList'


import TransactionHistory from './TransactionHistory/TransactionHistory'

export const App = () => {
  return (
    <div>
      <Profile
        key={user.tag}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>


  );
};
