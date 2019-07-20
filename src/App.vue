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
            <a v-for="integration in getIntegrations()"
               href="#"
               class="list-group-item list-group-item-action">
               {{integration.title}}
            </a>
        </div>
        <div class="list-group" v-if="selectedIndex === 1">
            <a v-for="integration in getModules()"
               href="#"
               class="list-group-item list-group-item-action">
                {{integration.name}}
            </a>
        </div>
        <div class="list-group" v-if="selectedIndex === 2">
            <a v-for="integration in getSystems()"
               href="#"
               class="list-group-item list-group-item-action">
                {{integration.title}}
            </a>
        </div>
    </div>
</template>

<script>
import Tabs from '@/components/Tabs';
import axios from 'axios';
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
            axios.get(this.url.integrations).then(response => {
                this.integrations = response.data;
            });
            return this.integrations;
        },
        getModules(){
            axios.get(this.url.modules).then(response => {
                this.modules = response.data;
            });
            return this.modules;
        },
        getSystems(){
            axios.get(this.url.systems).then(response => {
                this.systems = response.data;
            });
            return this.systems;
        }
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
