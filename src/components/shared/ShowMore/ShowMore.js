import React, { useState, Fragment } from 'react';

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
          <div>
            show {moreToShow} more of {list.length} items
          </div>
        )}
      </div>
    </>
  );
};

ShowMoreList.defaultProps = {
  count: 15,
};

export default ShowMoreList;
