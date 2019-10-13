import { create } from '@storybook/theming';

export default create({
  base: 'light',
  
  colorPrimary: '#16ec8f',
  colorSecondary: '#10d781',

  // UI
  // appBg: 'white',
  // appContentBg: 'silver',
  // appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Rubik", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#394B59',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'nysa-ui',
  brandUrl: 'https://github.com/Eusbolh/nysa-ui',
  brandImage: 'https://a.imge.to/2019/10/13/vLu8wG.png',
});
