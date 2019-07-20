<template>
    <li class="nav-item">
        <a
                :class="{active : index === selectedIndex}"
                @click="$emit('select-tab', index)"
                class="nav-link"
                href="#">
            {{tab}}
        </a>
    </li>
</template>

<script>
    export default {
        props: ['tab', 'index', 'selectedIndex'],
        name: "Tab"
    }
</script>

<style scoped>

</style>