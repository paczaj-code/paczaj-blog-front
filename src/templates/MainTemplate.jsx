import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ThemeSwither from '../components/molecules/ThemeSwitcher/ThemeSwitcher';
// import Switcher from '../components/atoms/Switcher/Switcher';
// import { AppSettingsContext } from '../context';
// import SidebarMenu from '../components/molecules/SidebarMenu/SidebarMenu';
import Sidebar from '../components/organisms/Sidebar/Sidebar';
import TopMenu from '../components/molecules/TopMenu/TopMenu';

const StyledGlobalWrapper = styled.div`
  background-attachment: fixed;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.globalBackgroundColor};
  background-image: url(${({ theme }) => theme.globalBackgroundImage});
`;

const StyledAppWrapper = styled.div`
  width: 100%;
  display: flex;
  /* flex-direction: column; */
`;

const StyledContentWrapper = styled.div`
  color: ${({ theme }) => theme.color};
  padding: 20px 0;
  /* display: flex; */
  padding-left: 50px;
  /* flex-direction: column; */
  width: 100%;
  /* margin-top: 60px; */
`;

const MainTemplate = ({ children }) => {
  const nodeRef = useRef(null);

  return (
    <StyledGlobalWrapper className="global-wrapper">
      <ThemeSwither />
      <StyledAppWrapper className="app-wrapper">
        {/* <TopMenu /> */}
        {/* <TopMenu /> */}
        <Sidebar />
        <StyledContentWrapper className="content-wrapper" ref={nodeRef}>
          {children}
        </StyledContentWrapper>
      </StyledAppWrapper>
    </StyledGlobalWrapper>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired
};
export default MainTemplate;
