import React, { useState, Fragment } from 'react';
import { motion } from 'framer-motion';
import { SeeMore } from './ShowMore.style';

const fadeIn = {
  style: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: 0.7, duration: 0.4 },
};

const ShowMoreList = ({ list, count }) => {
  const [showUntil, changeCount] = useState(count);
  const listItems = list.slice(0, showUntil);
  const moreToShow = Math.min(list.length - listItems.length, count);
  return (
    <>
      {listItems.slice(0, showUntil).map(({ key, comp }) => (
        <Fragment key={key}>{comp}</Fragment>
      ))}
      <div
        onClick={() => {
          changeCount(showUntil + moreToShow);
        }}
      >
        {moreToShow > 0 && (
          <SeeMore>
            <motion.div {...fadeIn}>
              show {moreToShow} more of {list.length} items
            </motion.div>
          </SeeMore>
        )}
      </div>
    </>
  );
};

ShowMoreList.defaultProps = {
  count: 15,
};

export default ShowMoreList;
