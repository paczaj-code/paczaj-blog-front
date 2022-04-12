import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
  font-weight: bold;
  padding: 0px 0px 5px 10px;
  > svg {
    margin-right: 5px;
  }
`;

const FormikLabel = ({ label, labelIcon, labelFor }) => (
  <>
    <StyledLabel htmlFor={labelFor}>
      {labelIcon ? <i icon={labelIcon} /> : null}
      {label}
    </StyledLabel>
  </>
);

FormikLabel.propTypes = {
  label: PropTypes.string,
  labelIcon: PropTypes.string,
  labelFor: PropTypes.string
};

FormikLabel.defaultProps = {
  label: '',
  labelIcon: null,
  labelFor: ''
};

export default FormikLabel;
