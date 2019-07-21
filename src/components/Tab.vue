<template>
    <li class="nav-item">
        <a
                :class="{active : index === currentTabIndex}"
                @click="$emit('selectedTab', index)"
                class="nav-link"
                href="#">
            {{tab}}
        </a>
    </li>
</template>

<script>
    export default {
        props: ["tab", "index", "currentTabIndex"],
        name: "Tab"
    }
</script>

<style scoped>

</style>