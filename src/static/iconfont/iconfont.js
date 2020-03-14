import { createGlobalStyle } from 'styled-components'

export const IconFontStyle = createGlobalStyle`
  @font-face {
    font-family: 'iconfont';  /* project id 1690489 */
    src: url('//at.alicdn.com/t/font_1690489_ux3ftsry8w9.eot');
    src: url('//at.alicdn.com/t/font_1690489_ux3ftsry8w9.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1690489_ux3ftsry8w9.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1690489_ux3ftsry8w9.woff') format('woff'),
    url('//at.alicdn.com/t/font_1690489_ux3ftsry8w9.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1690489_ux3ftsry8w9.svg#iconfont') format('svg');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-Aa:before {
    content: "\\e636";
  }

  .icon-search:before {
    content: "\\e651";
  }

  .icon-feather:before {
    content: "\\ecca";
  }

  .icon-reset:before {
    content: "\\e739"
  }
`
