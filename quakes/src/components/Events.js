import React from 'react';
import PropTypes from 'prop-types';
const Events = props => {
  const quake = props.details;
  const id = quake.ids.replace(/,/gi, '');
  return (
    <li>
      <a href={`/product/${id}`}>
        <span>{quake.mag}</span>
        <h4>{quake.place}</h4>
        <small>{quake.time}</small>
      </a>
    </li>
  );
};
Events.propTypes = {
  details: PropTypes.object
};

export default Events;
