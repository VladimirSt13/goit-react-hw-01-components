import styled from '@emotion/styled';

export const Element = styled.li`
  padding: ${p => `${p.theme.space[4]}px 0`};
  width: 33.33%;

  &:not(:last-child) {
    border-right: ${p => `${p.theme.borders.normal} ${p.theme.colors.grey}`};
  }
`;

export const Label = styled.span`
  display: block;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.grey};
  text-align: center;
`;

export const Quantity = styled.span`
  display: block;
  font-weight: ${p => p.theme.fontWeights.bold};
  text-align: center;
`;
