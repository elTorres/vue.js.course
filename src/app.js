var App = new Vue({
    el: '#app',
    data: {
        title: 'Hola mundo',
        link: 'http://www.google.com',
        linkTitle: 'Google',
        fullLink: '<a href="http://www.google.com">Google</a>',
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value;
        },
        getTitle: function() {
            return this.title;
        },
        increaseCounter: function( step, event ) {
            this.counter += step;
            this.title = event.target.title;
        },
        updateCoordinates: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
});

