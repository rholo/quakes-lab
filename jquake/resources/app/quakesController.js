app.quakesCtrl = {
    load : function () {
        app.quakesCtrl.view();
        app.quakesCtrl.settings();
        app.quakesCtrl.getQuakes();
    },

    view:function () {
        $j('[view]').load('./resources/partials/quakeList-tmpl.html');
    },
    settings: function() {
        $j(document).on('click', '', function (e) {
            e.preventDefault();
        });
    },
    getQuakes: function() {
        params = {
            starttime :app.quakeAPP.params.date,
            //maxlatitude :'-36.739055',
            //maxlongitude :'-71.0574942',
            latitude :(app.quakeAPP.params.lat) ? '':'-36.739055',
            longitude :(app.quakeAPP.params.lng)? '':'-71.0574942',
            //minradiuskm :'0',
            maxradiuskm :'850',
            minmagnitude : 4.5,
            //eventtype :'earthquake',
            format :'geojson'
        };
        console.info(params);
        app.service.getParams(app.quakeAPP.api+'/fdsnws/event/1/query',params)
        .done(function(data, xhr) {
            console.info(data, xhr);
            $j.each(data.features, function(_index, events){
                var HTML = '<li class="event">';
                        HTML += '<h5><strong>'+ events.properties.title +'</strong></h5>';
                        HTML += '<p class="place">'+ events.properties.place +'</p>';
                        HTML += '<p class="place">'+ new Date(events.properties.time).toLocaleString() +'</p>';
                        HTML += '<strong>'+ events.properties.title +'</strong>';
                        HTML += '<br/>';
                        HTML += '<small>Tsunami: '+ events.properties.tsunami +'</small>';
                        HTML += '<br/>';
                        HTML += '<small>Alert: '+ events.properties.alert +'</small>';
                    HTML += '</li>';
				$j('[quakes]').append(HTML);
            });
        })
        .fail();
    }

};
