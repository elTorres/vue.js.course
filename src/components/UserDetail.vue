<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{switchName()}} / {{objeto.name}}</p>
        <p>User age: {{userAge}}</p>
        <p>User age2: {{age2}}</p>
        <button @click="resetName()">Reset name</button>
        <button @click="resetFn()">Reset name from parent</button>
    </div>
</template>

<script>
    import {eventBus} from "../main.js";
    export default {
        data: function() {
            return {
                age2: 10
            }
        },
        props: {
            name: {
                type: String,
                //required: true,
                default: 'Pablo'
            },
            objeto: {
                type: Object
            },
            resetFn: Function,
            userAge: Number
        },
        methods: {
            switchName() {
                return this.name.split('').reverse().join('');
            },
            resetName() {
                this.objeto.name = "Obelix";
                this.$emit('nameChanged', this.objeto.name);
            }
        },
        created() {
            // Para poder recibir los eventos directos se deben registrar
            eventBus.$on("ageChanged", (data) => {
                this.age2 = data;
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
