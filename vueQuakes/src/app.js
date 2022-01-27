const app = new Vue({
  store,
  el: '#app',
  data: {
    events:[],
    ready: false
  },
  created() {
    this.getQuakes().then(features => {
      if (features.length > 0) { 
        this.ready = true;
      }
    });
  },
  methods:{
    ...Vuex.mapActions(['getQuakes'])
  }
})
