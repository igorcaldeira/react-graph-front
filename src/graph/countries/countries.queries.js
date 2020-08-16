import { gql } from 'apollo-boost';

export const LIST_COUNTRIES = gql`
  query {
    CallingCode {
      _id
      name
      countries {
        _id
        name
        capital
        flag {
          _id
          svgFile
        }
      }
    }
  }
`;

export const GET_COUNTRY = gql`
  query {
    Country(_id: $id) {
      name
      area
      population
      capital
      demonym
      flag {
        svgFile
      }
      distanceToOtherCountries(orderBy: distanceInKm_desc) {
        distanceInKm
        countryName
      }
    }
  }
`;
