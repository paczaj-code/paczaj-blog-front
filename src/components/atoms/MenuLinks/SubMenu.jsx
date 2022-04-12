import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MenuDivider } from '../../atoms/MenuLinks/MenuDivider';
import { Fragment } from 'react/cjs/react.production.min';

const StyledSubMenu = styled.ul`
  position: absolute;
  z-index: 100;
  visibility: hidden;
  opacity: 0;
  left: 215px;
  top: -20px;
  width: fit-content;
  background-color: ${({ theme }) => theme.grey700};
  list-style: none;
  padding: 5px 10px 5px 15px;
  border-radius: 10px;
  border: groove 1px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 30px -10px rgba(0, 0, 0, 0.9), 0 0 140px rgba(0, 0, 0, 0.3) inset;
  transform: translate(1em, 0);
  transition: visibility 0s, opacity 0.5s, transform 0.19s linear;

  > hr:last-child {
    display: none;
  }

  > li {
    margin: 10px 0;

    > a {
      color: ${({ theme }) => theme.light};
      text-decoration: none;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
      font-size: 1.8rem;
      > i {
        margin-right: 10px;
      }
      &.active {
        > i {
          color: ${({ theme }) => theme.blue};
        }
      }
    }
  }
`;

const StyledArrowWrapper = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;

  border-right: 10px solid rgba(60, 60, 60, 0.95);
  position: absolute;
  left: -10px;
  top: 29px;
  /* box-shadow: 0 0 4px rgba(0, 0, 0, 0.6); */
`;

const SubMenu = ({ subMenuItems, subLinksToKey, subLinksIconKey, subLinksLabelKey, mainPath }) => {
  return (
    subMenuItems && (
      <StyledSubMenu className="submenu">
        <StyledArrowWrapper />
        {subMenuItems.map((submenuItem) => (
          <Fragment key={submenuItem._id}>
            <li>
              <NavLink to={`/category/${mainPath}/${submenuItem.slug}`}>
                <i className={`icon-2x ${submenuItem.icon}`} />
                {submenuItem.name}
              </NavLink>
            </li>
            <MenuDivider className="submenu-divider" />
          </Fragment>
        ))}
      </StyledSubMenu>
    )
  );
};

SubMenu.propTypes = {
  subMenuItems: PropTypes.array.isRequired,
  subLinks: PropTypes.array,
  subLinksToKey: PropTypes.string,
  subLinksIconKey: PropTypes.string,
  subLinksLabelKey: PropTypes.string,
  mainPath: PropTypes.string.isRequired
};

export default SubMenu;
