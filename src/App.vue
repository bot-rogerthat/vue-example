<template>
    <div id="app">
        <h1>App</h1>
        <hr>
        <Tabs
                :tabs="tabs"
                :selectedIndex="selectedIndex"
                @selected="selectTab"
        />
        <div class="list-group" v-if="selectedIndex === 0">
            <a v-for="integration in integrations"
               href="#"
               class="list-group-item list-group-item-action">
               {{integration.title}}
            </a>
        </div>
        <div class="list-group" v-if="selectedIndex === 1">
            <a v-for="module in modules"
               href="#"
               class="list-group-item list-group-item-action">
                {{module.name}}
            </a>
        </div>
        <div class="list-group" v-if="selectedIndex === 2">
            <a v-for="system in systems"
               href="#"
               class="list-group-item list-group-item-action">
                {{system.title}}
            </a>
        </div>
    </div>
</template>

<script>
import Tabs from '@/components/Tabs';
export default {
    name: 'app',
    data(){
        return {
            tabs: ["Integrations", "Modules", "Systems"],
            selectedIndex: 0,
            content: [],
            integrations: [],
            modules: [],
            systems: []
        }
    },
    methods: {
        selectTab(index) {
            this.selectedIndex = index
        }
    },
    created() {
        this.$resource('todos').get().then(response => {
            this.integrations = response.body
        });
        this.$resource('comments').get().then(response => {
            this.modules = response.body
        });
        this.$resource('albums').get().then(response => {
            this.systems = response.body
        });

    },
    components:  { Tabs }
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
