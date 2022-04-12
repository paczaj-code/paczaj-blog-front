import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import MenuLink from '../../atoms/MenuLinks/MenuLink';
import { AppSettingsContext } from '../../../context';
import { Fragment } from 'react/cjs/react.production.min';
import { MenuDivider } from '../../atoms/MenuLinks/MenuDivider';

const StyledNavigation = styled.nav`
  position: fixed;
`;
const StyledSidebarMenuList = styled.ul`
  /* width: ; */
  /* position: fixed; */
  width: 223px;
  list-style: none;
  margin: 0;
  padding: 0;
  top: 0;

  > li {
    width: 100%;
    &:hover {
      > .submenu {
        transform: translate(0.2rem, 0);
        visibility: visible;
        opacity: 1;
      }
    }
    /*  */
    position: relative;
    > a {
      display: inline-block;
      line-height: 2rem;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
      width: 100%;
      padding: 12px 25px;
      font-size: 2rem;
      text-decoration: none;
      color: ${({ theme }) => theme.light};
      cursor: pointer;

      > i {
        position: relative;
        vertical-align: baseline;
        margin-top: 10px !important;
      }

      &.active {
        background-color: ${({ theme }) => theme.secondary};
        color: ${({ theme }) => theme.light};
        border-radius: 3px;
        box-shadow: 0px -10px 55px -12px rgba(0, 0, 0, 0.6) inset, 0 2px 7px -2px rgba(0, 0, 0, 0.8);
      }
    }
  }
`;

const SidebarMenu = () => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const appContext = useContext(AppSettingsContext);
  const { menuItems } = appContext;

  const showSubMenu = () => {
    setSubMenuVisible(true);
  };

  const hideSubMenu = () => {
    setSubMenuVisible(false);
  };

  return (
    <StyledNavigation>
      <StyledSidebarMenuList>
        <MenuLink linkTo="/" LinkLabel="Homepage" linkIcon="icon-home1" />
        <MenuDivider />
        {menuItems &&
          menuItems.map((item) => {
            return (
              <Fragment key={item._id}>
                <MenuLink
                  linkTo={`/category/${item.slug}`}
                  LinkLabel={item.name}
                  linkIcon={item.icon}
                  subMenuItems={item.subCategories}
                  mainPath={`${item.slug}`}
                  subLinksIconKey="icon"
                  subLinksLabelKey="name"
                  onMouseOver={showSubMenu}
                  onMouseLeave={hideSubMenu}
                  isSubMenuVisible={subMenuVisible}
                />
                <MenuDivider />
              </Fragment>
            );
          })}

        <MenuLink linkTo="/contact" LinkLabel="Kontakt" linkIcon="icon-user-circle" />
        <MenuDivider />
        <MenuLink linkTo="/glossary" LinkLabel="Słowniczek" linkIcon="icon-book" />
        <MenuDivider />
        <MenuLink
          linkTo="/administration/categories"
          LinkLabel="Kategorie"
          linkIcon="icon-view_list"
        />
        <MenuDivider />
        <MenuLink linkTo="/administration/articles" LinkLabel="Artykuły" linkIcon="icon-notebook" />
      </StyledSidebarMenuList>
    </StyledNavigation>
  );
};

export default SidebarMenu;
