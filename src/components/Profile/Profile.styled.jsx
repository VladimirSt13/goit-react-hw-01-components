import styled from '@emotion/styled';

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: ${p => p.theme.radii.round};
  margin-bottom: ${p => p.theme.space[5]}px;
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.grey}`};
`;

export const Name = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Tag = styled.p`
  color: ${p => p.theme.colors.grey};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Location = styled.p`
  color: ${p => p.theme.colors.grey};
`;

export const Stats = styled.ul`
  display: flex;
  background-color: #ebebeb;
  border-top: ${p => `${p.theme.borders.normal} ${p.theme.colors.grey}`};
`;

export const StatsElement = styled.li`
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
