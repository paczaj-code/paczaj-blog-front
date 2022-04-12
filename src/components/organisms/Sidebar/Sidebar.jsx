import React from 'react';
import SidebarMenu from '../../molecules/Menus/SidebarMenu';
import styled from 'styled-components';
import { rgba } from 'polished';

const StyledSidebarWrapper = styled.div`
  z-index: 1000;
  width: 250px;
  background-color: ${({ theme }) => rgba(theme.dark, 0.7)};
  min-height: 100vh;
  box-shadow: 4px 0 25px -12px rgba(0, 0, 0, 4);
`;

const Sidebar = () => {
  return (
    <StyledSidebarWrapper>
      <SidebarMenu />
    </StyledSidebarWrapper>
  );
};

export default Sidebar;
