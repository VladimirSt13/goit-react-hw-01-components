import styled from '@emotion/styled';

export const Table = styled.table`
  margin-bottom: 30px;
  width: 100%;
  border-collapse: collapse;
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.grey}`};
  box-shadow: ${p => p.theme.shadows.normal};
`;

export const TableHead = styled.thead`
  & th {
    padding: ${p => p.theme.space[3]}px;
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.grey}`};
  }
`;
