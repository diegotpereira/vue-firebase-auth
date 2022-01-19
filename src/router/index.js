import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'cadastrar',
        component: () =>
            import ('../components/Cadastrar.vue')
    },
    {
        path: '/entrar',
        name: 'entrar',
        component: () =>
            import ('../components/Entrar.vue')
    },
    {
        path: '/esqueceu-senha',
        name: 'esqueceu-senha',
        component: () =>
            import ('../components/EsqueceuSenha.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () =>
            import ('../components/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router