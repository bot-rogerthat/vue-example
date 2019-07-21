<template>
    <div>
        <h1>Comment id {{id}}</h1>
        <button class="btn btn-sm btn-info" @click="goBackToComments">Back</button>
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
            goBackToComments() {
                this.$router.push('/comments')
            }
        }
    }
</script>

<style scoped>

</style>