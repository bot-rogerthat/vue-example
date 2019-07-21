<template>
    <div class="list-group">
        <a v-for="elem in list"
           href="#"
           class="list-group-item list-group-item-action">
            {{elem.title}}
        </a>
    </div>
</template>

<script>
    export default {
        props: ["list"],
        name: "List"
    }
</script>

<style scoped>

</style>