import React from 'react';
import Events from 'components/Events';

const QuakesList = props =>
  props.quakes.map((quake, key) => {
    const quakeDetail = quake.properties;
    return <Events details={quakeDetail} key={key} />;
  });
export default QuakesList;
