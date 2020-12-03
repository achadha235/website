import React from 'react';
import theme from '../src/styles/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core/styles';

import '../src/styles/main.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {storyFn()}
  </ThemeProvider>
));
