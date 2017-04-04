/**
 * @version 0.2.0
 * @author Rodrigo Ahumada - Front-end at Nectia | hola@rholo.cl
 * @description Framework to make some useful functions more easily work with params to Front-end
 * @param $j
 **/

$j = jQuery.noConflict();

var app = app || {};

app.quakeAPP = {
    api: 'https://earthquake.usgs.gov',
    //api: 'api',
    load : function () {
        app.quakeAPP.setup();
    },
    params:{
        date:'',
        lat:'',
        lng:''
    },
    setup: function () {
        var date = new Date();
        date.setDate(date.getDate() -30); //30 dias atras
        app.quakeAPP.params.date = date.toISOString();

        $j.ajaxSetup({
            cache:false,
            async:false,
            dataType: 'json',
            contentType: 'application/json',
            statusCode:{
                404: function () {
                },
                409: function () {
                },
                200: function () {
                },
                201: function () {
                },
                204: function () {
                }
            }
        });
    }
};
//Load app & settings functions
$j(window).ready(function(){
    app.quakeAPP.load();
    app.quakesCtrl.load();
});
