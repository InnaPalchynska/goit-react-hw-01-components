import PropTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={`${s.profile}`}>
      <div className="description">
        <img src={avatar} alt="Аватар пользователя" className={`${s.avatar}`} />
        <p className={`${s.name}`}>{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={`${s.stats}`}>
        <li>
          <span className={`${s.label}`}>Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className={`${s.label}`}>Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className={`${s.label}`}>Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
