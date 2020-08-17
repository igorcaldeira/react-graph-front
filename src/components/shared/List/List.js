import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ROUTES from 'constants/routes';
import ShowMore from 'components/shared/ShowMore';
import { Item, Input } from './List.style';

const pageCount = 15;

const fadeIn = {
  style: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: 0.1, duration: 0.2 },
};

const fadeInSlidingUp = (delay) => ({
  style: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { delay, duration: 0.4 },
});

const ListItem = ({ id, flag, name, capital, listOrder }) => {
  let history = useHistory();
  let delay = (listOrder % pageCount) / 7;

  return (
    <motion.div {...fadeInSlidingUp(delay)}>
      <Item.Grid onClick={() => history.push(`${ROUTES.DETAILS}${id}`)}>
        <Item.Flag src={flag} alt={`${name} country flag`} />
        <Item.Description>
          <span>
            <h3>{name}</h3>
            <p>{capital} capital</p>
            <div>click to see more</div>
          </span>
        </Item.Description>
      </Item.Grid>
    </motion.div>
  );
};

const List = ({ list }) => {
  const { register, handleSubmit } = useForm();
  const [search, setSearch] = useState('');
  const searchRef = useRef(null);

  useEffect(() => {
    if (searchRef.current) {
      register(searchRef.current);
      searchRef.current.focus();
    }
  }, []);

  const onSubmit = (a) => setSearch(a?.search);

  const itemsList = list
    .filter(({ name }) => name.toLowerCase().indexOf(search.toLowerCase()) !== -1)
    .map(({ key, flag, name, capital }, listOrder) => ({
      key,
      comp: <ListItem id={key} flag={flag} name={name} capital={capital} listOrder={listOrder} />,
    }));

  return (
    <>
      <motion.div {...fadeIn}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="search"
            ref={(e) => {
              register(e);
              searchRef.current = e;
            }}
            placeholder="World Explorer"
          />
        </form>
      </motion.div>
      <ShowMore count={pageCount} list={itemsList} />
    </>
  );
};

export default List;
