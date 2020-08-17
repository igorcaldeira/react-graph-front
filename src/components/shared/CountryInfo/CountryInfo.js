import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Map from 'components/shared/Map';
import { GET_COUNTRY } from 'graph/countries/countries.queries';
import { TitleWithFlagBackground, DetailsContent } from './CountryInfo.style';

const CountryInfo = ({ id }) => {
  const { loading, data } = useQuery(GET_COUNTRY, {
    variables: { id },
  });

  if (loading) return null;

  const {
    name,
    capital,
    area,
    population,
    topLevelDomains,
    flag: { svgFile },
  } = data?.Country?.[0];

  return (
    !loading && (
      <>
        <TitleWithFlagBackground bg={svgFile}>
          {name} #{id}
        </TitleWithFlagBackground>
        <DetailsContent>
          <p>Name - {name}</p>
          <p>Capital - {capital}</p>
          <p>Area - {area}</p>
          <p>Population - {population}</p>
          <p>Top level domains - {topLevelDomains.map((d) => d.name).join('/ ')}</p>
          <Map countryName={name} />
        </DetailsContent>
      </>
    )
  );
};

export default CountryInfo;
