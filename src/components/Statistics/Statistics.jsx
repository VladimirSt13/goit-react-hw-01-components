// import PropTypes from 'prop-types';
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
      boxShadow="0px 1px 3px #2b2b2b71"
      as="section"
    >
      {title && <Title title={title} />}
      <Stats>
        {stats.map(stat => (
          <StatElement stat={stat} />
        ))}
      </Stats>
    </Box>
  );
};
