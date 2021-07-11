import PropTypes from 'prop-types';
import Statistics from './Statistics';
import s from './StatisticsList.module.css';

function StatisticsList({ stats }) {
  return (
    <ul className={`${s.statList}`}>
      {stats.map(stat => (
        <Statistics
          key={stat.id}
          label={stat.label}
          percentage={stat.percentage}
        />
      ))}
    </ul>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape),
};

export default StatisticsList;
