import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Base from 'components/template/Base';
import theme from 'assets/style/theme';
import * as serviceWorker from './serviceWorker';
import './reset.css';

const Home = lazy(() => import('pages/Home'));
const Details = lazy(() => import('pages/Details'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={() => '...'} >
      <ThemeProvider theme={theme}>
        <Base>
          <Router>
            <Switch>
              <Route path="/details">
                <Details />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
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
