Vue.component('QuakeList', {
    props:{
        event:{
            type: Object,
            required: true
        }
    },
    template:`<li>
        {{ event.properties.mag }}
    </li>`
});

Vue.component('quake-list',{
    props:['events'],
    template:'<li :class="[{red: events.properties.mag >= 5},{yellow: events.properties.mag <= 4.9}]">\
        <a href="javascript:;" v-on:click="details(events.id)">\
            <div class="block-color" :class="[{red: events.properties.mag >= 5},{yellow: events.properties.mag <= 4.9}]"></div>\
            <span class="mag"><i class="fa fa-place"></i>{{events.properties.mag}}</span>\
            <span class="place"><i class="fa fa-bullseye"></i>{{events.properties.place}}</span>\
            <p class="time"><i class="fa fa-clock"></i>{{events.properties.time}}</p>\
        </a>\
    </li>'
});
Vue.component('quake-detail',{
    props:['details'],
    template:'\
        <div class="detailQuakes">\
            <h3>M 5.1 - 86km ESE of Los Andes, Chile</h3>\
            <p>actualizado: <strong>02/03/2017 a las 10:30</strong></p>\
            <p>Sin alertas programadas</p>\
            <img src="" title="googleMaps">\
        </div>\
        '
});
var date = new Date();
date.setDate(date.getDate() -60);
var params = {
    starttime :this.date,
    //maxlatitude :'-36.739055',
    //maxlongitude :'-71.0574942',
    latitude :'-36.739055',
    longitude :'-71.0574942',
    //minradiuskm :'0',
    maxradiuskm :'850',
    minmagnitude :4.5,
    format :'geojson'
};
var url = 'https://earthquake.usgs.gov/fdsnws/event/1/query';

  //console.info(realQuakes);
var quakes = new Vue({
    el:'#earthquakesList',
    created() {
        this.getQuakes();
    },
    filters:{
        formatTime:function(v){
            //console.log(v, new Date(v));
            var date = new Date(v);
            var hours = date.getHours();
            var minutes = "0" + date.getMinutes();
            var seconds = "0" + date.getSeconds();
            return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        },
        formatDate:function(d){
            //console.log(d, new Date(d));
            var newDate = new Date(d),
            //var months = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
            day = ("0" + newDate.getDate()).slice(-2)
            month = ("0" + (newDate.getMonth() + 1)).slice(-2),
            year = newDate.getFullYear();
            //console.log(day, month, year);
            //console.log(newDate);
             return day +'/'+ month +'/'+ year
            //return new Date(d)
        },
        tsunami:function(value){
            if(value != 0)
                return 'Si'
                else return 'No'
        }
    },
    data:{
        events:[]
    },
    methods:{
        getQuakes:function() {
            Vue.http({
                url:url,
                method:'GET',
                params:params,
                //format :'geojson'
            }).then((response) => {
                    this.events = response.body.features;
            });
        },
        getDetails:function(id){
            console.info(id)
            Vue.http({
                url:'http://earthquake.usgs.gov/fdsnws/event/1/query',
                method:'GET',
                params:{
                    eventid:id,
                    format:'geojson'
                }
            }).then((response) => {
                this.detail = response.body,
                console.log(this.firstEvent);
            });
        }
    }
});

