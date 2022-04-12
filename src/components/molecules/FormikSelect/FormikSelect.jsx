import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputWrapper from '../../atoms/Wrappers/InputWrapper';
import FormikLabel from '../../atoms/FormikLabel/FormikLabel';
import FormikError from '../../atoms/FormikError/FormikError';

const StyledSelect = styled.select`
  height: 40px;
  /* width: 80%; */
  /* min-width: 150px; */
  font-size: 1.2rem;
  padding: 0 10px;
  -webkit-appearance: menulist-button;
  --moz-appearance: menulist-button;
  &:focus,
  :active {
    outline: none;
  }

  &.success {
    /* background: #639a72; */
  }
  &.error {
    border-color: #c95858;
    background-color: #731700;
    color: #fff;
  }
`;
const FormikSelect = ({
  name,
  value,
  onChange,
  onBlur,
  optionItems,
  touched,
  errors,
  labelIcon,
  label,
  placeholder,
  valueKey,
  labelKey
}) => {
  let inputStatusClassses;
  if (touched && !errors) {
    inputStatusClassses = 'success';
  }
  if (touched && errors) {
    inputStatusClassses = 'error';
  }
  return (
    <div>
      {label && <FormikLabel labelFor={name} labelIcon={labelIcon} label={label} />}
      <StyledSelect
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={inputStatusClassses}
      >
        <option value="">{placeholder}</option>
        {optionItems.map((item) => (
          <option value={item[valueKey]} label={item[labelKey]} key={item[valueKey]} />
        ))}
      </StyledSelect>

      <FormikError errors={errors} touched={touched} />
    </div>
  );
};

FormikSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  touched: PropTypes.bool,
  errors: PropTypes.string,
  labelIcon: PropTypes.string,
  optionItems: PropTypes.instanceOf(Array).isRequired,
  valueKey: PropTypes.string.isRequired,
  labelKey: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

FormikSelect.defaultProps = {
  label: '',
  onChange: undefined,
  onBlur: undefined,
  touched: undefined,
  errors: undefined,
  labelIcon: '',
  placeholder: 'Wybierz'
};

export default FormikSelect;
