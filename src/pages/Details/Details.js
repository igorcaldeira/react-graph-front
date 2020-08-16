import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ROUTES from 'constants/routes';
import CountryInfo from 'components/shared/CountryInfo';
import { BsArrowLeft } from 'react-icons/bs';
import { GoBack } from './Details.style';

const fadeIn = {
  style: { y: 10, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.4 },
};

const Details = () => {
  let { id } = useParams();

  return (
    <motion.div {...fadeIn}>
      <GoBack>
        <Link to={ROUTES.HOME}>
          <BsArrowLeft />
        </Link>
      </GoBack>
      {id && <CountryInfo id={id} />}
    </motion.div>
  );
};

export default Details;
