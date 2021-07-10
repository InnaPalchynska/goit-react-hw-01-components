import PropTypes from 'prop-types';

function SectionStatistics({ title, children }) {
  return (
    <section class="statistics">
      {{ title } && <h2 class="title">{title}</h2>}
      {children}
    </section>
  );
}

SectionStatistics.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default SectionStatistics;
