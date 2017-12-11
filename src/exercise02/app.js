new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        showAlert: function () {
            alert("Button clicked");
        },
        saveValue: function (event) {
            this.value = event.target.value;
        }
    }
});