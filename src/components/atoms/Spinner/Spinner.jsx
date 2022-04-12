import React from 'react';
import styled from 'styled-components';

const StyledSpinnerWarpper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
  display: flex;
  box-shadow: 0px 0px 53px -11px rgba(0, 0, 0, 0.8) inset, 0px 3px 6px -1px rgba(0, 0, 0, 0.9);
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.grey200};
  padding: 30px 20px;
  border-radius: 20px;
  width: fit-content;

  > p {
    font-size: 4rem;
    text-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
    padding-top: 5px;
  }
  > i {
    color: ${({ theme }) => theme.blue};
    text-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
    margin-right: 10px;
  }
`;
const Spinner = () => {
  return (
    <StyledSpinnerWarpper>
      <i className="icon-spinner1 icon-4x icon-spin "></i>
      <p>Momencik. Pobieram</p>
    </StyledSpinnerWarpper>
  );
};

export default Spinner;
