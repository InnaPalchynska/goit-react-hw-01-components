import PropTypes from 'prop-types';
import Statistics from './Statistics';

function StatisticsList({ stats }) {
  return (
    <ul class="stat-list">
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
