Vue.component('my-component', {
    data: function() {
        return {status: 'Critical'};
    },
    template: '<p>Server status: {{status}} <button @click="changeStatus">Change value</button></p>',
    methods: {
        changeStatus: function() {
            this.status = 'Normal';
        }
    }
});

var myComponent2 = {
    data: function() {
        return {status: 'Critical'};
    },
    template: '<p>Server2 status: {{status}} <button @click="changeStatus">Change value</button></p>',
    methods: {
        changeStatus: function() {
            this.status = 'Normal';
        }
    }
};
var vm1 = new Vue({
    el: "#app"
});
var vm2 = new Vue({
    el: "#app2",
    components: {
        "my-component": myComponent2
    }
});