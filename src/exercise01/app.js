var app = new Vue({
    el: '#exercise',
    data: {
        name: 'Fernando',
        age: 43,
        image: 'https://www.anipedia.net/imagenes/caracteristicas-generales-de-los-gatos.jpg'
    },
    methods: {
        getRandomFloat: function() {
            return Math.random();
        }
    }
})
