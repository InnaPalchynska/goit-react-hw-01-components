import PropTypes from 'prop-types';
import s from './Profile.module.css';

function ProfileStats({ followers, views, likes }) {
  return (
    <ul className={s.stats}>
      <li>
        <span className={s.label}>Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className={s.label}>Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className={s.label}>Likes</span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  );
}

ProfileStats.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default ProfileStats;
