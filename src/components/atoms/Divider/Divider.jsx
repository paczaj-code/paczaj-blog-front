import styled from 'styled-components';
import { lighten, darken, transparentize } from 'polished';

const Divider = styled.hr`
  width: 90%;
  margin-bottom: 0px;
  border-width: 1px;
  border-color: ${({ theme }) => lighten(0.05, theme.dark)};
  /* box-shadow: 0 0px 1px 0px
    ${({ theme }) => transparentize(0.2, darken(0.1, theme.globalBackgroundColor))}; */
  border-radius: 10px;
`;

export default Divider;

// TODO poprwaic styl
