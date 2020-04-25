import { FONT_LIST } from "./helpers/loadFonts";
import { createGlobalStyle } from "styled-components";

const FONT_FAMILY = {
  normal: ["'Ubuntu'"].join(", "),
  monospace: [],
};

const globalStyles = createGlobalStyle`
  @font-face: {
    ${[...FONT_LIST]};
  }
  *, *:after, *:before{
  box-sizing: inherit;
  }
  html {
    -webkit-text-size-adjust: 100%;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: ${FONT_FAMILY.normal};
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color:inherit;
  }
`;

export default globalStyles;