import PropTypes from 'prop-types';
import s from './SectionStatistics.module.css';

function SectionStatistics({ title, children }) {
  return (
    <section className={s.statistics}>
      {{ title } && <h2 className="title">{title}</h2>}
      {children}
    </section>
  );
}

SectionStatistics.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default SectionStatistics;
