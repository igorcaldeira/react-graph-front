import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import MapGL, { Marker } from 'react-map-gl';
import { GET_CLOSEST_NEIGHBORS } from 'graph/countries/countries.queries';
import Loading from 'components/shared/Loading';

const defaultViewport = {
  width: '100%',
  height: 400,
  latitude: 0,
  longitude: 0,
  zoom: 4,
};

const Map = ({ countryName }) => {
  const [viewport, setViewPort] = useState(defaultViewport);
  const { loading, data } = useQuery(GET_CLOSEST_NEIGHBORS);

  const _onViewportChange = (viewport) => setViewPort({ ...viewport, transitionDuration: 1 });

  const originCountry = data?.CallingCode?.find((c) => c.countries.find((country) => country?.name === countryName))?.countries?.[0];
  const neighborsNameList = (originCountry?.distanceToOtherCountries || []).map((n) => n.countryName);
  const neighborsFullData = data?.CallingCode?.filter((c) => neighborsNameList.includes(c.countries?.[0]?.name)).map(
    (c) => c?.countries?.[0]
  );

  useEffect(() => {
    if (originCountry?.location) {
      setViewPort(
        Object.assign({}, defaultViewport, {
          latitude: originCountry.location.latitude,
          longitude: originCountry.location.longitude,
        })
      );
    }
  }, [loading]);

  const mapStyle = 'mapbox://styles/mapbox/dark-v8';
  const token = process.env.REACT_APP_MAP_TOKEN;

  return loading ? (
    <Loading />
  ) : (
    <>
      <h3>Nearest neighbords of {countryName}</h3>
      {neighborsFullData.map((n, position) => (
        <p key={n.name}>
          {position + 1}º {n.name} (lat {n.location.longitude}; long {n.location.latitude})
        </p>
      ))}
      <MapGL {...viewport} mapboxApiAccessToken={token} mapStyle={mapStyle} onViewportChange={_onViewportChange}>
        <Marker longitude={originCountry.location.longitude} latitude={originCountry.location.latitude}>
          {originCountry.name}
        </Marker>
        {neighborsFullData.map(({ name, location }) => (
          <Marker key={name} longitude={location.longitude} latitude={location.latitude}>
            {name}
          </Marker>
        ))}
      </MapGL>
    </>
  );
};
export default Map;
