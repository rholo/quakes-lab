const getDate = (date = 60) => {
  var newDate = new Date();
  newDate.setDate(newDate.getDate() -date)
  console.log(newDate);
  return newDate.toISOString();
}
const getState = () => ({
  title: 'Sismos en Chile',
  quakes: [],
  params: {
    starttime: getDate(),
    //maxlatitude :'-36.739055',
    //maxlongitude :'-71.0574942',
    latitude: '-36.739055',
    longitude: '-71.0574942',
    //minradiuskm :'0',
    maxradiuskm:'850',
    minmagnitude:4.5,
    format: 'geojson'
  }
});
const store = new Vuex.Store({
  state: getState(),
  getters: {
    quakes: state => state.quakes,
  },
  mutations: {
    SET_FEATURES(state, payload){
      state.quakes = payload;
    }
  },
  actions: {
    async getQuakes({state, commit}) {
      
      const { params } = state;
      const url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?';
      
      try {
        const request = await fetch(`${url}${new URLSearchParams({...params})}`);
        const response = await request.json();

        const { features } = response;

        commit('SET_FEATURES', features);

        return features;

      } catch (error) {
        throw new Error(error);
      }
    }
  },
});
