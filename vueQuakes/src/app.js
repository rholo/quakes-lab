const app = new Vue({
  store,
  el: '#app',
  data() {
    return {
      events:[]
    }
  },
  created() {
    this.getQuakes().then(features => {
      this.events = features 
    });
  },
  methods:{
    ...Vuex.mapActions(['getQuakes', 'ready'])
  }
})
