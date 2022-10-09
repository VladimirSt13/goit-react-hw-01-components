import PropTypes from 'prop-types';
import { Element, Label, Quantity } from './ProfileElement.styled';

export const ProfileElement = props => {
  const { name, stats } = props;
  return (
    <Element>
      <Label>{name}</Label>
      <Quantity>{stats[name.toLowerCase()]}</Quantity>
    </Element>
  );
};

ProfileElement.propTypes = {
  name: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
