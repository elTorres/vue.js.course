var data = {
    title: 'The VueJS Instance',
    showParagraph: false
}

Vue.component('Hello', {
    template: '<h1>Hello Template!</h1>'
})

var vm1 = new Vue({
    el: "#app1",
    data: data, 
    methods: {
        show: function () {
            this.showParagraph = true;
            this.updateTitle('The VueJS Instance (Updated)');
            console.log("refs:", this.$refs);
            this.$refs.myButton.innerText = "Changed from $ref.innerText";
        },
        updateTitle: function (title) {
            this.title = title;
        }
    },
    computed: {
        lowercaseTitle: function () {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function (value) {
            //alert('Title changed, new value: ' + value);
        }
    }
});

var vm2 = new Vue({
    el: '#app2',
    data: {
        title: 'VueJS 2nd Instance'
    },
    methods: {
        onChange: function () {
            vm1.title = 'Changed from Instance 2';
        }
    }
});
