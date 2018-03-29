import Vue from 'vue'
import App from './App.vue'

/**
 * Instancia de Vue que se utiliza como Bus de eventos para poder enviar
 * eventos desde un componente a otro sin pasar por los padres.
 * 
 * Se debe declarar antes que la instancia de Vue que la va a utilizar
 */
export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})