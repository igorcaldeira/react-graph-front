import React, { useState, useEffect, lazy } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { persistCache } from 'apollo-cache-persist'
import { resolvers } from 'graph/resolvers/resolver';

const Home = lazy(() => import('pages/Home'));
const Details = lazy(() => import('pages/Details'));

const cache = new InMemoryCache({})

const client = new ApolloClient({
    cache: cache,
    countries: {
        defaults: [],
        resolvers: resolvers
    }
})

async function setupPersistence() {
    try {
        await persistCache({
            cache: cache,
            storage: window.localStorage
        })
    } catch (err) {
        console.log(err)
    }
}

const App = () => {
    const [hydrated, setHydrated] = useState(false)

    useEffect(() => {
        setupPersistence()
            .finally(() => setHydrated(true))
    }, [])

    if (!hydrated)
        return <p>loading our persisted cache...</p>

    return (
        <ApolloProvider client={client}>
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
        </ApolloProvider>
    )
}

export default App;
