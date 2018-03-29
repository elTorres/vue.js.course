<template>
    <div class="container">
        <div class="row">
            <app-header/>
        </div>
        <hr>
        <div class="row">
            <app-server-list/>
            <app-server-detail/>
        </div>
        <hr>
        <div class="row">
            <app-footer/>
        </div>
    </div>
</template>

<script>
    import Header from './components/shared/Header.vue';
    import Footer from './components/shared/Footer.vue';
    import ServerList from './components/server/ServerList.vue';
    import ServerDetail from './components/server/ServerDetail.vue';
    export default {
        components: {
            'app-header': Header,
            'app-server-list': ServerList,
            'app-server-detail': ServerDetail,
            'app-footer': Footer
        }
    }
</script>