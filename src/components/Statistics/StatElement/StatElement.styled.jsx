import styled from '@emotion/styled';
import getRandomHexColor from '../../Utils/getRandomColor';

export const Element = styled.li`
  width: 90px;
  padding: ${p => `${p.theme.space[4]}px 0`};
  background-color: ${color => getRandomHexColor()};
  &:not(:last-child) {
    border-right: ${p => `${p.theme.borders.normal} ${p.theme.colors.grey}`};
  }
`;

export const Label = styled.span`
  display: block;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.white};
  text-align: center;
`;

export const Percentage = styled.span`
  display: block;
  text-align: center;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.xm};
  color: ${p => p.theme.colors.white};
`;
