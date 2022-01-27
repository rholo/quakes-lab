const QuakeEvent = Vue.component('QuakeEvent', {
  props: {
    event: {
      type: Object,
      required: true
    }  
  },
  computed: {
    magnitudeSize(){
      if (this.event.mag >= 5){
        return 'red'
      }
      return 'yellow' 
    },
    formatDate() {
      const date = new Date(this.event.time);
      return date.toLocaleDateString()
    },
    getTime() {
      const date = new Date(this.event.time);
      return date.toLocaleTimeString('en-US', {hour12: false});
    }
  },
  template:`<a>
              <div class="block-color"
                :class="magnitudeSize">
              </div>
                    <span class="mag">
                      <i class="fa fa-place" />
                      {{ event.mag }}
                    </span>
                    <span class="place">
                      <i class="fa fa-bullseye" />
                      {{ event.place }}
                    </span>
                    <span class="">
                      <i class="fa fa-clock" />
                      Fecha: {{ formatDate }}
                      Hora: {{ getTime }}
                    </span>
                    <span v-if="event.tsunami != 0">
                      <strong>Declarada Alerta de Tsunami</strong>
                    </span>
              </a>`
});
