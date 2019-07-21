<template>
    <div>
        <h1>Todo id {{id}}</h1>
        <button class="btn btn-sm btn-info" @click="goBackToTodos">Back</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                id: this.$route.params['id']
            }
        },
        methods: {
            goBackToTodos() {
                this.$router.push('/todos')
            }
        }
    }
</script>

<style scoped>

</style>