import PropTypes from 'prop-types';
import { Box } from '../Commons/Box';
import { Title } from './Title/Title';
import { StatElement } from './StatElement/StatElement';
import { Stats } from './Statistic.styled';

export const Statistics = props => {
  const { title, stats } = props;
  return (
    <Box
      m={3}
      bg="white"
      width="400px"
      overflow="hidden"
      border="normal"
      borderColor="grey"
      borderRadius="normal"
      boxShadow="normal"
      as="section"
    >
      {title && <Title title={title} />}
      <Stats>
        {stats.map(stat => (
          <StatElement key={stat.id} stat={stat} />
        ))}
      </Stats>
    </Box>
  );
};

Statistics.prototype = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
