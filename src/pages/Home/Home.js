import React, { useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import List from 'components/shared/List';
import { flatCountries } from 'lib/countries';
import { LIST_COUNTRIES } from 'graph/countries/countries.queries';

const Home = () => {
  const { data } = useQuery(LIST_COUNTRIES);
  const list = useMemo(() => flatCountries(data), [data]);

  return (
    <div>
      <List list={list} />
    </div>
  );
};

export default Home;
