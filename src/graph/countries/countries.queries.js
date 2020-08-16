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
  query($id: String!) {
    Country(_id: $id) {
      name
      capital
      area
      population
      flag {
        svgFile
      }
      topLevelDomains {
        name
      }
    }
  }
`;

export const GET_CLOSEST_NEIGHBORS = gql`
  query {
    CallingCode {
      countries {
        name
        location {
          longitude
          latitude
        }
        distanceToOtherCountries(first: 5, orderBy: distanceInKm_asc) {
          countryName
          distanceInKm
        }
      }
    }
  }
`;
