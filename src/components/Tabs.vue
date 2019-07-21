<template>
    <ul class="nav nav-tabs">
        <Tab
                v-for="(tab, index) of tabs"
                :tab="tab"
                :index="index"
                :selectedIndex="selectedIndex"
                @selected="selectTab"
        />
    </ul>
</template>

<script>
    import Tab from '@/components/Tab';
    export default {
        props: ['tabs', 'selectedIndex'],
        name: "Tabs",
        components: {
            Tab
        },
        methods: {
            selectTab(index){
                this.$emit('selected', index);
            }
        }
    }
</script>

<style scoped>

</style>