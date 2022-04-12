import styled from 'styled-components';

export const StyledTopMenuLink = styled.a`
  line-height: 2.2rem;
  text-transform: uppercase;
  font-size: 2.3rem;
  font-family: 'Baloo 2', 'sans-serif';
  text-decoration: none;
  color: ${({ theme }) => (theme.themeName !== 'light' ? theme.color : theme.grey800)};
  display: flex;
  align-items: center;

  &:after,
  &:before {
    opacity: 0;
    align-items: center;
    color: ${({ theme }) => (theme.themeName !== 'light' ? theme.orange : theme.blue)};
    font-size: 2.5rem;
    transition: transform 0.3s, opacity 0.2s;
    font-family: 'Baloo 2', sans-serif;
  }

  &:after {
    margin-left: 2px;
    content: '}';
    transform: translateX(-10px);
  }

  &:before {
    margin-right: 2px;
    content: '{...';
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    transform: translateX(20px);
  }
  &:hover:not(.active) {
    &:before,
    &:after {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  &.active {
    &:before,
    &:after {
      opacity: 1;
      transform: translateX(0px);
      color: ${({ theme }) => (theme.themeName !== 'light' ? theme.blue : theme.danger)};
    }
  }
`;

export const StyledMobileNavLink = styled(StyledTopMenuLink)`
  font-weight: bold;
  position: relative;
  color: ${({ theme }) => theme.grey200};
  &:before {
    content: '';
    font-style: italic;
    font-size: 1.6rem;
    text-transform: lowercase;
    font-family: 'Baloo 2', cursive;
    color: #00bfeb;
    position: absolute;
    bottom: 9px;
    vertical-align: text-bottom;
    opacity: 0;
  }

  &:after {
    content: '';
  }

  &.active {
    :before {
      content: 'this.';
      left: -31px;
      top: 0;
      color: #ff6315;
    }
  }
`;

export const StyledSidebarLink = styled(StyledMobileNavLink)`
  &:hover:not(.active) {
    :before {
      content: 'use.';
      left: -29px;
      top: 0;
      opacity: 1;
      transition: opacity 500ms;
    }
  }
`;

// const Link = styled.a`
//   color: ${({ theme }) => theme.secondary};
// `;
//
// export default Link;
