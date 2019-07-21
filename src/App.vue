<template>
    <div id="app">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <router-link tag="li" class="nav-item" to="/todos" active-class="active">
                        <a class="nav-link">Todos</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" to="/comments" active-class="active">
                        <a class="nav-link">Comments</a>
                    </router-link>
                </ul>
            </div>
        </nav>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
}
</script>

<style>

</style>
