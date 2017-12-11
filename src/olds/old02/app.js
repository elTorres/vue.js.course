var App = new Vue({
    el: "#app",
    data: {
        title: "Hola mundo!!!",
        x: 0,
        y: 0,
        counter: 0,
        secondCounter: 0
    }, 
    watch: {
        counter: function(value) {
            console.log("From Watch");
            var vm = this;
            setTimeout(function() {
                vm.counter = 0;
            }, 2000);
        }
    },
    computed: {
        output: function() {
            console.log("From Computed");
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    }, 
    methods: {
        updateCoordinates: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        updateTitle: function(event) {
            this.title = event.target.value;
        },
        increase: function(step, event) {
            this.counter += step;
        },
        stopPropagation: function(event) {
            event.stopPropagation();
        },
        manageKeys: function(event) {
            console.log("Enter or space pressed");
        },
        result: function(event) {
            console.log("From Method");
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    }
})