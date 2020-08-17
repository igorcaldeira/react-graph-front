import React, { Suspense, useState, useEffect, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { persistCache } from 'apollo-cache-persist';
import { resolvers } from 'graph/resolvers';
import ENDPOINTS from 'constants/endpoints';
import ROUTES from 'constants/routes';
import { ThemeProvider } from 'styled-components';
import Base from 'components/template/Base';
import theme from 'assets/style/theme';

const Home = lazy(() => import('pages/Home'));
const Details = lazy(() => import('pages/Details'));

const cache = new InMemoryCache({});

const client = new ApolloClient({
  uri: ENDPOINTS.URI,
  cache: cache,
});

const SuspenseFallback = () => null;

async function setupPersistence() {
  await persistCache({
    cache: cache,
    storage: window.localStorage,
  });
}

const App = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setupPersistence().finally(() => setHydrated(true));
  }, []);

  if (!hydrated) return null;

  return (
    <React.StrictMode>
      <Suspense fallback={<SuspenseFallback />}>
        <ThemeProvider theme={theme}>
          <Base>
            <ApolloProvider client={client}>
              <Router>
                <Switch>
                  <Route path={`${ROUTES.DETAILS}:id`}>
                    <Details />
                  </Route>
                  <Route path={ROUTES.HOME}>
                    <Home />
                  </Route>
                </Switch>
              </Router>
            </ApolloProvider>
          </Base>
        </ThemeProvider>
      </Suspense>
    </React.StrictMode>
  );
};

export default App;
