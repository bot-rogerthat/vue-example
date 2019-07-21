<template>
    <div>
        <h1>Todos page</h1>
        <ul>
            <router-link
                    tag="li"
                    v-for="todo in todos"
                    :to="'/todo/' + todo.id"
                    :key="todo.id"
            >
                <a>{{todo.title}}</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                todos: []
            }
        },
        created() {
            this.$resource('todos').get().then(response => {
                this.todos = response.body
            });
        }
    }
</script>

<style scoped>

</style>