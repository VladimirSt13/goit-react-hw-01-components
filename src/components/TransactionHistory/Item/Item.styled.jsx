import styled from '@emotion/styled';

export const ItemRow = styled.tr`
  padding: ${p => p.theme.space[3]}px;

  &:nth-of-type(2n) {
    background-color: ${p => p.theme.colors.lightgrey};
  }
  & td {
    padding: ${p => `${p.theme.space[3]}px ${p.theme.space[3]}px`};
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.grey}`};
    text-align: center;
    font-size: ${p => p.theme.fontSizes.m};
    &:first-of-type {
      text-transform: capitalize;
    }
  }
`;
