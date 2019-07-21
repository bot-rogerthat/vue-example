<template>
    <div class="list-group">
        <a
                v-for="(elem, index) in list"
                @click="$emit('selectedRow', index)"
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