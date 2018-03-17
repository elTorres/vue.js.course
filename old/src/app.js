var data = {status: 'Critical'};

Vue.component('my-component', {
    data: function() {
        return data;
    },
    template: '<p>Server status: {{status}} <button @click="changeStatus">Change value</button></p>',
    methods: {
        changeStatus: function() {
            this.status = 'Normal';
        }
    }
})
var vm1 = new Vue({
    el: "#app"
});