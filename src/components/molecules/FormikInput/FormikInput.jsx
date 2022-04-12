import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FormikError from '../../atoms/FormikError/FormikError';
import FormikLabel from '../../atoms/FormikLabel/FormikLabel';
import InputWrapper from '../../atoms/Wrappers/InputWrapper';
import { darken, transparentize } from 'polished';

const StyledInput = styled.input`
  height: 40px;
  font-size: 1.6rem;
  padding: 0 10px;
  outline: none;
  border-radius: 10px;
  width: 100%;
  /* background-color: ${({ theme }) => theme.whiteHalf}; */
  &.success {
    border-color: #639a72;
  }
  &.error {
    border-color: ${({ theme }) => darken(0.1, theme.red)};
    background-color: ${({ theme }) => transparentize(0.5, theme.red)};
    color: ${({ theme }) => theme.grey100};
  }
`;

const FormikInput = ({
  type,
  name,
  label,
  placeholder,
  onChange,
  value,
  onBlur,
  touched,
  errors,
  labelIcon
}) => {
  let inputStatusClassses;
  if (touched && !errors) {
    inputStatusClassses = 'success';
  }
  if (touched && errors) {
    inputStatusClassses = 'error';
  }

  return (
    <InputWrapper>
      {label && <FormikLabel labelFor={name} labelIcon={labelIcon} label={label} />}
      <StyledInput
        type={type}
        label={label}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        touched={touched}
        className={inputStatusClassses}
      />
      <FormikError errors={errors} touched={touched} />
    </InputWrapper>
  );
};

FormikInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  touched: PropTypes.bool,
  errors: PropTypes.string,
  labelIcon: PropTypes.instanceOf(Array)
};

FormikInput.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  onChange: undefined,
  onBlur: undefined,
  touched: undefined,
  errors: undefined,
  labelIcon: undefined
};

export default FormikInput;
