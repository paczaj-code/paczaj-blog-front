import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { AppSettingsContext } from '../../../context';
import { StyledTopMenuLink } from '../../atoms/Link/Link';
const StyledList = styled.ul`
  list-style: none;
  display: flex;
  li {
    margin: 0 5px;

    > a > span.icon-home {
      font-size: 2.3rem !important;
      margin-top: -5px;
    }
  }
`;

const StyledTopMenuNavWrapper = styled.nav`
  gap: 30px;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  font-weight: bold;
  font-size: 26px;
  text-shadow: ${({ theme }) =>
    theme.themeName !== 'light'
      ? '0px 0px 0 rgb(135, 135, 135), 2px 2px 0 rgb(24, 24, 24), 1px 1px 0 rgb(-86, -86, -86)'
      : '0px 0px 0 rgb(235, 235, 235), 2px 2px 0 rgb(214, 214, 214), 1px 1px 0 rgb(-86, -86, -86)'};
`;

const StyledNavigationWrapper = styled.div`
  position: relative;
  z-index: 301;
`;

// const StyledSearchWrapper = styled.div`
//   margin-top: -5px;
//   width: 65px;
//  > span {
//    color: ${({ theme }) => theme.grey200};
//  }
//   @media screen and (min-width: 920px) {
//     width: 160px;
//     }
//   }
// `;

const TopMenu = () => {
  const nodeRef = useRef(null);
  const { navPosition, appLanguage } = useContext(AppSettingsContext);

  return (
    <StyledNavigationWrapper ref={nodeRef} data-testid="top-navigation">
      <StyledTopMenuNavWrapper id="top-navigation">
        {/* <Logo position="top-menu" /> */}
        <StyledList className="page-menu">
          <li>
            <StyledTopMenuLink as={NavLink} to="/">
              <i className="icon-home1"></i>
            </StyledTopMenuLink>
          </li>
          <li>
            <StyledTopMenuLink as={NavLink} to="categories">
              Kategorie
            </StyledTopMenuLink>
          </li>
          <li>
            <StyledTopMenuLink as={NavLink} to="/contact">
              Kontakt
            </StyledTopMenuLink>
          </li>
          <li>
            {/* <StyledTopMenuLink as={NavLink} to="/" exact> */}
            {/* <IconIcomoon iconName="home" iconSize="2x" /> */}
            {/* </StyledTopMenuLink> */}
          </li>
          {/* {mainMenuItems.map((menuItem) => ( */}
          {/* <li key={menuItem.name_pl}> */}
          {/* <StyledTopMenuLink as={NavLink} to={menuItem.path} exact={menuItem.exact}>
                  {appLanguage === 'pl' ? menuItem.name_pl : menuItem.name_en}
                </StyledTopMenuLink> */}
          {/* </li> */}
          {/* ))} */}
        </StyledList>
        {/* <StyledSearchWrapper> */}
        {/* <IconIcomoon iconName="magnifying-glass" iconSize="3x" /> */}
        {/* </StyledSearchWrapper> */}
      </StyledTopMenuNavWrapper>
    </StyledNavigationWrapper>
  );
};
export default React.memo(TopMenu);
