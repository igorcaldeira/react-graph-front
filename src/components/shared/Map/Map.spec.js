import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ApolloProvider } from '@apollo/react-hooks';
import { createMockClient } from 'mock-apollo-client';
import { GET_CLOSEST_NEIGHBORS } from 'graph/countries/countries.queries';
import { neighbourMock } from 'assets/mocks/neighbours';
import Map from './Map';

describe('Map component ', () => {
  const mockClient = createMockClient();
  const mutationHandler = jest.fn().mockResolvedValue({
    loading: false,
    data: neighbourMock,
  });

  mockClient.setRequestHandler(GET_CLOSEST_NEIGHBORS, mutationHandler);

  it('renders without crashing', async () => {
    const { findByText } = render(
      <ApolloProvider client={mockClient}>
        <Map countryName={'lorem'} />
      </ApolloProvider>
    );

    expect(await findByText(/Nearest neighbords of lorem/i)).toBeInTheDocument();
  });
});
