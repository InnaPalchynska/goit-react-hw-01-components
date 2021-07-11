import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ id, label, percentage }) {
  return (
    <li className={`${s.item}`} key={id}>
      <span className="label">{label}</span>
      <span className={`${s.percentage}`}>{percentage}%</span>
    </li>
  );
}

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
