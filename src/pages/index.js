import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/style/theme';
import GlobalStyle from 'components/style/GlobalStyle';
import Base from 'components/template/Base';
import store from 'store/store';

const Profile = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Base>Hello World</Base>
      <GlobalStyle />
    </ThemeProvider>
  </Provider>
);

export default Profile;
