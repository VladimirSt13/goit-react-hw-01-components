import styled from '@emotion/styled';

export const FriendItem = styled.li`
  padding: ${p => `${p.theme.space[2]}px ${p.theme.space[4]}px`};
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.grey}`};
  box-shadow: ${p => p.theme.shadows.normal};
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${({ theme, isOnline }) => {
    return isOnline ? theme.colors.green : theme.colors.red;
  }};
`;

export const Avatar = styled.img`
  border-radius: ${p => p.theme.radii.normal};
`;

export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
