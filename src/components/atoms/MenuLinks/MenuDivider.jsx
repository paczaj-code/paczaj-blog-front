import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

const StyledDivider = styled.hr`
  border-color: ${({ theme }) =>
    theme.themeName === 'dark' ? rgba(theme.grey700, 0.4) : rgba(theme.grey500, 0.4)};
  border-style: inset;
`;

export const MenuDivider = () => {
  return <StyledDivider />;
};
