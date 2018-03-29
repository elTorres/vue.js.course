<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User! My name is {{name}} / {{objeto.name}} and I'm {{age}} years old.</p>
        <button @click="changeName">Change name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                    @nameChanged="name = $event"
                    :name="name" :objeto="objeto" :resetFn="resetName" 
                    :userAge="age">
                </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                    @ageChanged="age = $event"
                    :userAge="age">
                </app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: 'Fernando',
                objeto: {
                    name: 'Fernando'
                },
                age: 27
            }
        },
        methods: {
            changeName() {
                this.name = 'Petri'
                this.objeto.name = this.name;
            },
            resetName() {
                this.name = 'reset from Parent'
                this.objeto.name = this.name;
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
