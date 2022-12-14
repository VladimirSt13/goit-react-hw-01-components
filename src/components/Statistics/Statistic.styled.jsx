import styled from '@emotion/styled';

export const Stats = styled.ul`
  display: flex;
  width: 100%;
  background-color: ${p => p.theme.colors.lightgrey};
  border-top: ${p => `${p.theme.borders.normal} ${p.theme.colors.grey}`};
`;
