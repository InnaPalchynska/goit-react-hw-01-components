import './App.css';
import Profile from './components/profile/Profile';
import user from './data/user.json';

import SectionStatistics from './components/statistics/SectionStatistics';
import StatisticsList from './components/statistics/StatisticsList';
import statisticalData from './data/statistical-data.json';

import FriendList from './components/friendList/FriendList';
import friends from './data/friends.json';

import transactions from './data/transactions.json';
import TransactionHistory from './components/transactionHistory/TransactionHistory';

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <SectionStatistics title="Upload stats">
        <StatisticsList stats={statisticalData} />
      </SectionStatistics>
      <SectionStatistics>
        <StatisticsList stats={statisticalData} />
      </SectionStatistics>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
