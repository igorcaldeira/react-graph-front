import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ApolloProvider } from '@apollo/react-hooks';
import { createMockClient } from 'mock-apollo-client';
import { GET_CLOSEST_NEIGHBORS } from 'graph/countries/countries.queries';
import Map from './Map';

describe('Map component ', () => {
  const mockClient = createMockClient();
  const mutationHandler = jest.fn().mockResolvedValue({
    loading: false,
    data: {
      CallingCode: [
        {
          countries: [
            {
              name: 'lorem',
              location: {
                latitude: 33,
                longitude: 65,
              },
              distanceToOtherCountries: [
                {
                  countryName: 'lorem2',
                  distanceInKm: 1,
                },
              ],
            },
          ],
        },
        {
          countries: [
            {
              name: 'lorem2',
              location: {
                latitude: 33,
                longitude: 65,
              },
              distanceToOtherCountries: [
                {
                  countryName: 'lorem',
                  distanceInKm: 1,
                },
              ],
            },
          ],
        },
      ],
    },
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
