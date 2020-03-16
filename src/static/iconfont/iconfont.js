import { createGlobalStyle } from 'styled-components'

export const IconFontStyle = createGlobalStyle`
  @font-face {
    font-family: 'iconfont';  /* project id 1690489 */
    src: url('//at.alicdn.com/t/font_1690489_ulai0o3k9t.eot');
    src: url('//at.alicdn.com/t/font_1690489_ulai0o3k9t.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1690489_ulai0o3k9t.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1690489_ulai0o3k9t.woff') format('woff'),
    url('//at.alicdn.com/t/font_1690489_ulai0o3k9t.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1690489_ulai0o3k9t.svg#iconfont') format('svg');
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
    content: "\\e739";
  }

  .icon-diamond::before {
    content: "\\e62e";
  }

  .icon-comment::before {
    content: "\\e6c7";
  }
  
  .icon-heart::before {
    content: "\\e6b3";
  }

  .icon-reward::before {
    content: "\\e611";
  }
`
