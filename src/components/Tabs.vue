<template>
    <ul class="nav nav-tabs">
        <Tab
                v-for="(tab, index) of tabs"
                :tab="tab"
                :index="index"
                :selectedIndex="selectedIndex"
                @selected="$emit('selected', index)"
        />
    </ul>
</template>

<script>
    import Tab from '@/components/Tab';
    export default {
        props: ["tabs", "selectedIndex"],
        name: "Tabs",
        components: {
            Tab
        }
    }
</script>

<style scoped>

</style>