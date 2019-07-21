import VueRouter from 'vue-router'
import Todos from './pages/Todos.vue'
import Todo from './pages/Todo.vue'
import Comments from './pages/Comments.vue'
import Comment from './pages/Comment.vue'
import Error404 from './pages/Error.vue'

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/todos'
        },
        {
            path: '/todos',
            component: Todos
        },
        {
            path: '/todo/:id',
            component: Todo
        },
        {
            path: '/comments',
            component: Comments
        },
        {
            path: '/comment/:id',
            component: Comment
        },
        {
            path: '*',
            component: Error404
        }
    ],
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        return {
            x: 0,
            y: 0
        }
    }
})