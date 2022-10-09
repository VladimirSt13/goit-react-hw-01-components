import PropTypes from 'prop-types';
import { TitleStyled } from './Title.styled';

export const Title = props => {
  const { title } = props;
  return <TitleStyled>{title}</TitleStyled>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
