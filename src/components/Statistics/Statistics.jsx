// import PropTypes from 'prop-types';
// import { Box } from '../Commons/Box';

export const Statistics = props => {
  const { title, stats } = props;

  return (
    <section>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(stat => (
          <li key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
