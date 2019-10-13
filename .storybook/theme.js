import { create } from '@storybook/theming';

export default create({
  base: 'light',
  
  colorPrimary: '#69ffd0',
  colorSecondary: '#f4b00f',

  // UI
  // appBg: 'white',
  // appContentBg: 'silver',
  // appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Rubik", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#5C7080',
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

  brandTitle: 'crispy-ui',
  brandUrl: 'https://github.com/Eusbolh/crispy-ui',
  brandImage: 'https://b.imge.to/2019/07/24/Z51PF.png',
});
