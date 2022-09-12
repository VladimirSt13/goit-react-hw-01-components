import React from 'react';
import PropTypes from 'prop-types';
import { ContainerStyled } from './Container.styled';

export const Container = ({ title, children }) => {
  return (
    <ContainerStyled>
      {title && <h2>{title}</h2>}
      {children}
    </ContainerStyled>
  );
};

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
