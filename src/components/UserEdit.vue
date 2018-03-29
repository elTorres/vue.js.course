<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User age: {{userAge}}</p>
        <button @click="editAge">Edit Age</button>
        <button @click="editAge2">Edit Age2</button>
    </div>
</template>

<script>
    import {eventBus} from "../main.js"
    export default {
        props: {
            userAge: Number
        },
        methods: {
            editAge() {
                this.$emit("ageChanged", 40);
            },
            editAge2() {
                eventBus.$emit("ageChanged", 41);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
