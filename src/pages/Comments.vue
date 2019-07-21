<template>
    <div>
        <h1>Comments page</h1>
        <ul>
            <router-link
                tag="li"
                v-for="comment in comments"
                :to="'/comment/' + comment.id"
                :key="comment.id"
            >
                <a>{{comment.name}}</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                comments: []
            }
        },
        created() {
            this.$resource('comments').get().then(response => {
                this.comments = response.body
            });
        }
    }
</script>

<style scoped>

</style>