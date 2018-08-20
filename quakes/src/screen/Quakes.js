import React from 'react';
import API from 'api';
import QuakesList from 'components/QuakesList';

export default class Quakes extends React.Component {
  constructor() {
    super();
    this.state = {
      quakes: []
    };
  }
  componentDidMount() {
    API.get('/fdsnws/event/1/query', {
      params: {
        starttime: '20-07-2018',
        latitude: '-36.739055',
        longitude: '-71.0574942',
        maxradiuskm: '300', // km
        minmagnitude: 4.4, // Magnitude  richter
        format: 'geojson'
      }
    }).then(res => {
      const quakes = res.data.features;
      this.setState({ quakes });
    });
  }
  render() {
    return <QuakesList quakes={this.state.quakes} />;
  }
}
