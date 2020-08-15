import React, { useMemo } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

export const QUERY_COUNTRIES = gql`
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
            emoji
          }
        }
      }
    }
`

const flatCountries = (data) => {
    const newShapeData = data.CallingCode.map((callingCodeItem) => (
        callingCodeItem.countries.map((country) => ({
            key: country._id,
            name: country.name,
            capital: country.capital,
            flag: country.flag.emoji,
        }))
    ));
    return newShapeData.flat();
}

const Home = () => {
    const { data } = useQuery(QUERY_COUNTRIES);
    const list = useMemo(() => flatCountries(data), data);

    return list.map(({ key, flag, name, capital }) => (
                <div key={key}>
                    {flag}
                    {name}
                    {capital}
                </div>
            ));
}

export default Home;