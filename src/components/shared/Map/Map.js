import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import MapGL, { Marker } from 'react-map-gl';
import { GET_CLOSEST_NEIGHBORS } from 'graph/countries/countries.queries';

const defaultViewport = {
  width: '100%',
  height: 400,
  latitude: 0,
  longitude: 0,
  zoom: 3,
};

const Map = ({ countryName }) => {
  const [viewport, setViewPort] = useState(defaultViewport);
  const { loading, data } = useQuery(GET_CLOSEST_NEIGHBORS);

  const tk = 'pk.eyJ1IjoiaWdvcmNhbGRlaXJhIiwiYSI6ImNrZHhmajl6eDMyZTkyc3FxM2hmcDVpMWMifQ.Abwo8jsqUgVXOEa3zeh0Og';

  const _onViewportChange = (viewport) => setViewPort({ ...viewport, transitionDuration: 1 });

  const originCountry = data?.CallingCode?.find((c) => c.countries?.[0]?.name === countryName)?.countries?.[0];
  const neighborsNameList = (originCountry?.distanceToOtherCountries || []).map((n) => n.countryName);
  const neighborsFullData = data?.CallingCode?.filter((c) => neighborsNameList.includes(c.countries?.[0]?.name)).map(
    (c) => c?.countries?.[0]
  );

  useEffect(() => {
    if (originCountry.location) {
      setViewPort(
        Object.assign({}, defaultViewport, {
          latitude: originCountry.location.latitude,
          longitude: originCountry.location.longitude,
        })
      );
    }
  }, [loading]);

  return (
    !loading && (
      <section>
        <h3>Nearest neighbords of {countryName}</h3>
        <div>
          {neighborsFullData.map((n) => (
            <p>
              {n.name} {n.location.longitude} {n.location.latitude}
            </p>
          ))}
        </div>
        <MapGL {...viewport} mapboxApiAccessToken={tk} mapStyle="mapbox://styles/mapbox/dark-v8" onViewportChange={_onViewportChange}>
          <Marker longitude={originCountry.location.longitude} latitude={originCountry.location.latitude}>
            {originCountry.name}
          </Marker>
          {neighborsFullData.map((n) => (
            <Marker offsetLeft={0} offsetTop={0} longitude={n.location.longitude} latitude={n.location.latitude}>
              {n.name}
            </Marker>
          ))}
        </MapGL>
      </section>
    )
  );
};
export default Map;
