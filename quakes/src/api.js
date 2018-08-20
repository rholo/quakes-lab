import axios from 'axios';

export default axios.create({
  baseURL: 'https://earthquake.usgs.gov'
});

/*
  params: {
      //callback      :'JSON_CALLBACK',
      starttime       : date,
      //maxlatitude   :'-36.739055',
      //maxlongitude  :'-71.0574942',
      latitude        : lat,
      longitude       : lng,
      //minradiuskm   :'0',
      maxradiuskm     : '300', // km
      minmagnitude    : 4.4, // Magnitude  richter
      //eventtype     :'earthquake',
      format          :'geojson'
  }
*/
