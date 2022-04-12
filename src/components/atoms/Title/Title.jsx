import React from 'react';
import PropTypes from 'prop-types';
import Divider from '../Divider/Divider';
import styled from 'styled-components';

const StyledTitleWrapper = styled.div`
  display: flex;
  > i {
    margin-top: 5px;
    margin-right: 2px;
    font-size: 4rem !important;
  }
`;

const StyledTitle = styled.h2`
  font-weight: bolder;
  text-shadow: ${({ theme }) =>
    theme.themeName === 'dark'
      ? '0px 2px 2px rgba(0, 0, 0, 0.5)'
      : '0px 2px 2px rgba(100, 100, 100, 0.5)'};
  padding: 10px;
`;
const Title = ({ label, icon }) => {
  return (
    <>
      <StyledTitleWrapper>
        {icon && <i className={icon}></i>}
        <StyledTitle>{label}</StyledTitle>
      </StyledTitleWrapper>
      <Divider />
    </>
  );
};

Title.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string
};
export default Title;
