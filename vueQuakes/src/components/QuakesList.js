const QuakesList = Vue.component('QuakesList', {
  data(){
    return {
      finder: ''
    }
  },
  computed: {
    ...Vuex.mapGetters(['quakes', 'filteredEvent'])
  },
  methods: {
    findEvent(){
      return this.filteredEvent(this.finder)
    }
  },
  template: `<div>
    <input type="text" v-model="finder" @input="findEvent">
    <ul class="events">
      <li v-for="event in filteredEvent(finder)">
        <QuakeEvent :event="event.properties" />
      </li>
    </ul>
  </div>`
})
