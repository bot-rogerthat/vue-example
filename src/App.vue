<template>
    <div id="app">
        <h1>App</h1>
        <hr>
        <Tabs
                :tabs="tabs"
                :selectedIndex="selectedIndex"
                @select-tab="selectTab"
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
            integrations: [],
            modules: [],
            systems: [],
            url: {
                integrations: "https://jsonplaceholder.typicode.com/todos",
                modules: "https://jsonplaceholder.typicode.com/comments",
                systems: "https://jsonplaceholder.typicode.com/albums"
            }
        }
    },
    methods: {
        selectTab(index) {
            this.selectedIndex = index
        },
        getIntegrations(){
            this.$http.get(this.url.integrations).then(response => {
                this.integrations = response.body;
            });
        },
        getModules(){
            this.$http.get(this.url.modules).then(response => {
                this.modules = response.body;
            });
        },
        getSystems(){
            this.$http.get(this.url.systems).then(response => {
                this.systems = response.body;
            });
        },
    },
    created() {
        this.getIntegrations();
        this.getModules();
        this.getSystems();
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
