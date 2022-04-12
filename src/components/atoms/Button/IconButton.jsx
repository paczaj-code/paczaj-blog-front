import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const IconActionButton = styled.button`
  background: transparent;
  border: none;
  > i {
    /* color: red; */
  }
`;

const IconActionIcon = styled.i`
  cursor: pointer;

  &.edit {
    /* color: #44d1df; */
    color: ${({ theme }) => theme.primary};
  }
  &.delete {
    /* color: #f44560; */
    color: ${({ theme }) => theme.danger};
  }
`;

const IconButton = ({ type, onClick }) => {
  return (
    <IconActionButton type="button" onClick={onClick} className={type}>
      {type === 'edit' ? (
        <IconActionIcon className={`icon-tools1 icon-2x ${type}`}></IconActionIcon>
      ) : (
        <IconActionIcon className={`icon-trash-can3 icon-2x ${type}`}></IconActionIcon>
      )}
    </IconActionButton>
  );
};

IconButton.propTypes = {
  type: PropTypes.oneOf(['edit', 'delete']),
  onClick: PropTypes.func
};

IconButton.defaultProps = {
  onClick: () => {}
};

export default IconButton;

// <button class="text-shadow-lg">
// <i
//   v-if="buttonType === 'edit'"
//   class="icon-tools1 dark:text-sky-300 icon-3x text-sky-700"
// ></i>
// <i
//   v-if="buttonType === 'delete'"
//   class="icon-trash-can3 dark:text-red-500 text-rose-600 icon-3x"
// ></i>
// </button>
