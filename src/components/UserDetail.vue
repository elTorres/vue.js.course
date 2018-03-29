<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>My name is {{switchName()}} / {{objeto.name}}</p>
        <button @click="resetName()">Reset name</button>
        <button @click="resetFn()">Reset name from parent</button>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                //required: true,
                default: 'Pablo'
            },
            objeto: {
                type: Object
            },
            resetFn: Function
        },
        methods: {
            switchName() {
                return this.name.split('').reverse().join('');
            },
            resetName() {
                this.objeto.name = "Obelix";
                this.$emit('nameChanged', this.objeto.name);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
