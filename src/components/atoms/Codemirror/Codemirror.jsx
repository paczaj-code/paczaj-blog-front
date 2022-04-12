import React from 'react';
import PropTypes from 'prop-types';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/keymap/sublime';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/3024-day.css';
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/edit/closetag';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import './Codemirror.css';

import { useTheme } from 'styled-components';

const Codemirror = ({ setStateFunc, codeValue }) => {
  const theme = useTheme();
  const codeTheme = theme.themeName !== 'light' ? 'dracula' : 'default';
  return (
    <CodeMirror
      value={codeValue || '\n\n\n\n\n'}
      autoCursor={false}
      onChange={(editor, data, value) => {
        setStateFunc(value);
      }}
      options={{
        theme: codeTheme,
        lineNumbers: true,
        tabSize: 2,
        keyMap: 'sublime',
        mode: 'htmlmixed',
        viewportMargin: 20,
        scrollbarStyle: null,
        autoCloseTags: true,
        lineWrapping: true
      }}
    />
  );
};

Codemirror.propTypes = {
  codeValue: PropTypes.string,
  setStateFunc: PropTypes.func
};

Codemirror.defaultProps = {
  codeValue: '',
  setStateFunc: undefined
};
export default Codemirror;
