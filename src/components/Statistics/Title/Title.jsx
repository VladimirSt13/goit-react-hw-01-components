import PropTypes from 'prop-types';
import { TitleStyled } from './Title.styled';

export const Title = props => {
  const { title } = props;
  return <TitleStyled>{title}</TitleStyled>;
};

Title.prototype = {
  title: PropTypes.string.isRequired,
};
