import React from 'react';

const List = ({ list }) =>
  list.map(({ key, flag, name, capital }) => (
    <div key={key}>
      {flag}
      {name}
      {capital}
    </div>
  ));

export default List;
