import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ApolloProvider } from '@apollo/react-hooks';
import { createMockClient } from 'mock-apollo-client';
import { GET_COUNTRY, GET_CLOSEST_NEIGHBORS } from 'graph/countries/countries.queries';
import { countryMock } from 'assets/mocks/country';
import { neighbourMock } from 'assets/mocks/neighbours';
import CountryInfo from './CountryInfo';

describe('CountryInfo component ', () => {
  const mockClient = createMockClient();
  const mutationHandler = jest.fn().mockResolvedValue({
    loading: false,
    data: countryMock,
  });

  const mutationMapHandler = jest.fn().mockResolvedValue({
    loading: false,
    data: neighbourMock,
  });

  mockClient.setRequestHandler(GET_COUNTRY, mutationHandler);
  mockClient.setRequestHandler(GET_CLOSEST_NEIGHBORS, mutationMapHandler);

  it('renders without crashing', async () => {
    const { findByText } = render(
      <ApolloProvider client={mockClient}>
        <CountryInfo />
      </ApolloProvider>
    );

    expect(await findByText(/Nearest neighbords of lorem/i)).toBeInTheDocument();
  });
});
