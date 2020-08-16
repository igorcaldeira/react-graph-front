import React from 'react';
import { useHistory } from 'react-router-dom';
import ShowMore from 'components/shared/ShowMore';
import { Item } from './List.style';
import ROUTES from 'constants/routes';

const ListItem = ({ id, flag, name, capital }) => {
  let history = useHistory();
  return (
    <Item.Grid onClick={() => history.push(`${ROUTES.DETAILS}${id}`)}>
      <Item.Flag src={flag} />
      <Item.Description>{capital}</Item.Description>
    </Item.Grid>
  );
};

const List = ({ list }) => {
  const itemsList = list.map(({ key, flag, name, capital }) => ({
    key,
    comp: <ListItem id={key} flag={flag} name={name} capital={capital} />,
  }));

  return <ShowMore list={itemsList} />;
};

export default List;
