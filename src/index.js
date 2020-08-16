import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Base from 'components/template/Base';
import theme from 'assets/style/theme';
import * as serviceWorker from './serviceWorker';
import App from './App';
import './reset.css';

const SuspenseFallback = () => null;

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<SuspenseFallback />}>
      <ThemeProvider theme={theme}>
        <Base>
          <App />
        </Base>
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
