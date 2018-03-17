Vue.component('my-component', {
    data: function() {
        return {
            status: 'Critical'
        }
    },
    template: '<p>Server status: {{status}}</p>'
})
var vm1 = new Vue({
    el: "#app"
});