import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import SubMenu from './SubMenu';
import { CSSTransition } from 'react-transition-group';

const MenuLink = ({
  linkTo,
  LinkLabel,
  linkIcon,
  subMenuItems,
  mainPath,
  isSubMenuVisible,
  onMouseOver,
  onMouseLeave
}) => {
  return (
    <li onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <NavLink to={linkTo}>
        <i className={`icon-2x ${linkIcon}`} /> {LinkLabel}
      </NavLink>

      {subMenuItems && <SubMenu subMenuItems={subMenuItems} mainPath={mainPath} />}
    </li>
  );
};

MenuLink.propTypes = {
  linkTo: PropTypes.string.isRequired,
  LinkLabel: PropTypes.string.isRequired,
  linkIcon: PropTypes.string.isRequired,
  onMouseOver: PropTypes.func,
  onMouseLeave: PropTypes.func,
  subMenuItems: PropTypes.array,
  subLinksIconKey: PropTypes.string,
  subLinksLabelKey: PropTypes.string,
  mainPath: PropTypes.string,
  isSubMenuVisible: PropTypes.bool
};

export default MenuLink;
