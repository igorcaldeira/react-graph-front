export const neighbourMock = {
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
};
