import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/template.vue'
import Create from '../pages/Create/template.vue'
import Details from '../pages/Details/template.vue'
import Edit from '../pages/Edit/template.vue'
import LogIn from '../pages/LogIn/template.vue'
import SignUp from '../pages/SignUp/template.vue'
import My from '../pages/My/template.vue'
import Users from '../pages/Users/template.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    // name: 'Create',
    component: Create
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/my',
    name: 'My',
    component: My
  },{
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },{
    path: '/users',
    name: 'Users',
    component: Users
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
