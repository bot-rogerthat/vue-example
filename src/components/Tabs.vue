<template>
    <ul class="nav nav-tabs">
        <Tab
                v-for="(tab, index) of tabs"
                :tab="tab"
                :index="index"
                :currentTabIndex="currentTabIndex"
                @selectedTab="$emit('selectedTab', index)"
        />
    </ul>
</template>

<script>
    import Tab from '@/components/Tab';
    export default {
        props: ["tabs", "currentTabIndex"],
        name: "Tabs",
        components: {
            Tab
        }
    }
</script>

<style scoped>

</style>