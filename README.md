# Quakes Labs #

Demo con listado de sismos alrededor de una ubicación (geolocalización del dispositivo), se han creado tres versiones, utilizando jQuery, angularJS y VueJS

### API USGS ###

[GET] : http://earthquake.usgs.gov/fdsnws/event/1/query[params]

### Initial Params ###

- starttime:'dd/mm/yyyy'
- maxlatitude:'-36.739055',
- maxlongitude :'-71.0574942',
- latitude :'-36.739055',
- longitude :'-71.0574942',
- minradiuskm :'0',
- maxradiuskm :'850',
- minmagnitude :4.5,
- eventtype :'earthquake',
- format :'geojson'