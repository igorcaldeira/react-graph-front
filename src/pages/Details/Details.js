import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { GET_COUNTRY } from 'graph/countries/countries.queries';
import ROUTES from 'constants/routes';

const Details = () => {
  let { id } = useParams();
  const { data } = useQuery(GET_COUNTRY, {
    variables: { id: String(186) },
  });

  const country = data?.Country?.[0];

  return (
    <>
      <Link to={ROUTES.HOME}>Back</Link>
      <div>
        {country &&
          Object.keys(country)
            .filter((property) => typeof country[property] === 'string')
            .map((prop) => (
              <div key={prop}>
                {prop}: {country[prop] || 'n/a'}
              </div>
            ))}
      </div>
    </>
  );
};

export default Details;
