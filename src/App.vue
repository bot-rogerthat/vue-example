<template>
    <div id="app">
        <h1>App</h1>
        <hr>
        <Tabs
                :tabs="tabs"
                :selectedIndex="selectedIndex"
                @selected="selectTab"
        />
        <List
                :list="currentList"
        />
    </div>
</template>

<script>
import Tabs from '@/components/Tabs';
import List from '@/components/List';
export default {
    name: 'app',
    data(){
        return {
            tabs: ["Integrations", "Modules", "Systems"],
            selectedIndex: 0,
            currentList: [],
            integrations: [],
            modules: [],
            systems: []
        }
    },
    methods: {
        selectTab(index) {
            this.selectedIndex = index
            if (this.selectedIndex === 0){
                this.currentList = this.integrations
            } else if (this.selectedIndex === 1){
                this.currentList = this.modules
            } else {
                this.currentList = this.systems
            }
        }
    },
    created() {
        this.$resource('todos').get().then(response => {
            this.integrations = response.body
            this.currentList = this.integrations
        });
        this.$resource('photos').get().then(response => {
            this.modules = response.body
        });
        this.$resource('albums').get().then(response => {
            this.systems = response.body
        });

    },
    components: {
        Tabs, List
    }
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
