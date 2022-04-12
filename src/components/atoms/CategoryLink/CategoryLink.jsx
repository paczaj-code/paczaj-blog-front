import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCategoryLink = styled.p`
  margin: 15px 0;
  cursor: pointer;
  > i {
    margin-right: 6px;
  }
  &.active {
    color: red;
  }
`;

const CategoryLink = ({ label, icon, onClick, id, className }) => {
  return (
    <StyledCategoryLink onClick={onClick} data-id={id} className={className}>
      <i className={icon}></i>
      {label}
    </StyledCategoryLink>
  );
};

CategoryLink.propTypes = {
  icon: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

CategoryLink.defaultProps = {
  className: ''
};
export default CategoryLink;
