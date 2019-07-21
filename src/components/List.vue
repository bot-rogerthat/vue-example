<template>
    <div class="list-group" v-if="selectedIndex === 0">
        <a v-for="integration in integrations"
           href="#"
           class="list-group-item list-group-item-action">
            {{integration.title}}
        </a>
    </div>
</template>

<script>
    export default {
        props: [],
        name: "List"
    }
</script>

<style scoped>

</style>