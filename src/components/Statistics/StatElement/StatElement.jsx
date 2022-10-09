import PropTypes from 'prop-types';
import { Element, Label, Percentage } from './StatElement.styled';

export const StatElement = props => {
  const { stat } = props;
  return (
    <Element>
      <Label>{stat.label}</Label>
      <Percentage>{stat.percentage}</Percentage>
    </Element>
  );
};

StatElement.propTypes = {
  stat: PropTypes.exact({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
