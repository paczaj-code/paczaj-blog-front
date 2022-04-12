import { css } from 'styled-components';
import { getContrast, darken, lighten } from 'polished';

export const StyledButtonCSS = css`
  padding: 8px 10px;
  border-radius: 10px;
  font-size: 1.6rem;
  font-weight: normal;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  border: solid 2px transparent;

  &svg {
    margin: auto;
  }
  &:focus,
  :active {
    outline: none;
  }
  ${(props) =>
    props.btnColor &&
    css`
      background: radial-gradient(
        ellipse at bottom left,
        ${({ theme }) => theme[props.btnColor]} 0%,
        ${({ theme }) => lighten(0.06, theme[props.btnColor])} 50%,
        ${({ theme }) => lighten(0.12, theme[props.btnColor])} 70%,
        ${({ theme }) => lighten(0.25, theme[props.btnColor])} 100%
      );

      background-size: 190% 100%;
      color: ${({ theme }) =>
        getContrast(theme[props.btnColor], theme.grey100) > 4.1 ? theme.grey100 : theme.wax};
      border: none;
      box-shadow: 0 2px 3px 1px ${({ theme }) => darken(0.1, theme[props.btnColor])},
        0 1px 8px 2px rgba(0, 0, 0, 0.5);
      transition: all 500ms;
      &:hover {
        background-position: 100% 0;
        box-shadow: 0 2px 3px 1px ${({ theme }) => darken(0.1, theme[props.btnColor])},
          0 1px 4px 1px rgba(0, 0, 0, 0.9);
        transition: all 500ms;
      }
      & svg {
        color: ${({ theme }) =>
          getContrast(theme[props.btnColor], theme.grey100) > 4.1 ? theme.grey100 : theme.wax};
      }
    `}
  ${(props) =>
    props.btnBig &&
    css`
      font-size: 1.9rem;
      padding: 10px;
    `}

  ${(props) =>
    props.btnSmall &&
    css`
      font-size: 1.3rem;
      padding: 5px 8px;
    `}
`;
