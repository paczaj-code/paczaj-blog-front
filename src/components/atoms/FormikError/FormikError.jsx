import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './animation.css';
import { darken, transparentize } from 'polished';

const StyledErrorWrapper = styled.div`
  display: block;
`;
const StyledErrorContainer = styled.div`
  display: flex;
  align-items: center;
  border-color: ${({ theme }) => darken(0.1, theme.red)};
  background-color: ${({ theme }) => transparentize(0.1, theme.red)};
  position: absolute;
  font-size: 1.3rem;
  padding: 8px 10px 5px;
  border-radius: 10px;
  box-shadow: 0 2px 6px -3px rgba(0, 0, 0, 1);
  z-index: 10;
  color: #fff;
`;
const FormikError = ({ errors, touched }) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      in={Boolean(touched) && Boolean(errors)}
      timeout={200}
      classNames="formik-error"
      unmountOnExit
      nodeRef={nodeRef}
    >
      <StyledErrorWrapper>
        <StyledErrorContainer ref={nodeRef}>
          <i className="icon-times-circle"></i>
          &nbsp;
          {errors}
        </StyledErrorContainer>
      </StyledErrorWrapper>
    </CSSTransition>
  );
};

FormikError.propTypes = {
  errors: PropTypes.string,
  touched: PropTypes.bool
};

FormikError.defaultProps = {
  errors: '',
  touched: undefined
};

export default FormikError;
