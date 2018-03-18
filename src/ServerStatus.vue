<template>
<div>
    <p>Server Status: {{status}}</p>
    <hr>
    <button @click="changeState">Change Status</button>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            status: 'Normal'
        }
    },
    methods: {
        changeState() {
            this.status = 'Critical'
        }
    }
}
</script>
