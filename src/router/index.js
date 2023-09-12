import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Referents from '../views/Referents.vue'
import Blogs from '../views/Blogs.vue'
import Blog from '../views/Blog.vue'
import Collaborate from '../views/Collaborate.vue'
import Images from '../views/Images.vue'
import Thanks from '../views/Thanks.vue'
import Admin from '../views/Admin.vue'
import Donations from '../views/Donations.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/referentes',
    name: 'Referents',
    component: Referents
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/blog/:view',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/colabora',
    name: 'Collaborate',
    component: Collaborate
  },
  {
    path: '/imagenes',
    name: 'Images',
    component: Images
  },
  {
    path: '/gracias',
    name: 'Thanks',
    component: Thanks
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/donaciones',
    name: 'Donations',
    component: Donations
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
