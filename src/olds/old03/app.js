var App = new Vue({
    el: '#app',
    data: {
        attachGreen: false,
        attachRed: false,
        color: "blue"
    },
    computed: {
        divBlue: function() {
            return {
                blue: this.attachBlue,
                yellow: !this.attachBlue
            };
        }
    }
});