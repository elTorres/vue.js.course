<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>My name is {{switchName()}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                /*
                type: Object,
                default: function() {
                    return {
                        name: 'Manuela'
                    }
                },
                */
                type: String,
                //required: true,
                default: 'Pablo'
            }
        },
        methods: {
            switchName() {
                return this.name.split('').reverse().join('');
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
