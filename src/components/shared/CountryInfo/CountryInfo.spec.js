import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ApolloProvider } from '@apollo/react-hooks';
import { createMockClient } from 'mock-apollo-client';
import { GET_COUNTRY, GET_CLOSEST_NEIGHBORS } from 'graph/countries/countries.queries';
import CountryInfo from './CountryInfo';

describe('CountryInfo component ', () => {
  const mockClient = createMockClient();
  const mutationHandler = jest.fn().mockResolvedValue({
    loading: false,
    data: {
      Country: [
        {
          name: 'lorem',
          capital: 'lorem',
          area: 'lorem',
          population: 'lorem',
          flag: { svgFile: 'lorem' },
          topLevelDomains: [{ name: 'lorem' }],
        },
      ],
    },
  });

  const mutationMapHandler = jest.fn().mockResolvedValue({
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
