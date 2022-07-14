import { css, Global } from '@emotion/react';

export const ResetCss = css`
  html {
    font-size: 14px;
    line-height: 1.6;
  }

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    width: 100%;
  }

  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: none;
  }
`;

function GlobalStyle() {
  return <Global styles={ResetCss} />;
}

export default GlobalStyle;
