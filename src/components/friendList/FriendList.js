import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friendsItem => (
        <FriendListItem
          key={friendsItem.id}
          avatar={friendsItem.avatar}
          name={friendsItem.name}
          isOnline={friendsItem.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape),
};

export default FriendList;
