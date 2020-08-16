import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

export const QUERY_GET_COUNTRY = gql`
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

const Details = () => {
  let { id } = useParams();
  const { data } = useQuery(QUERY_GET_COUNTRY, {
    variables: { id },
  });

  const country = data?.Country?.[0];

  return (
    <div>
      {country &&
        Object.keys(country)
          .filter((property) => typeof country[property] === 'string')
          .map((prop) => (
            <div>
              {prop}: {country[prop] || 'n/a'}
            </div>
          ))}
    </div>
  );
};

export default Details;
