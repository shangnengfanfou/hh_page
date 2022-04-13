import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/',
    name: 'Home',
    // component: () => import('@/components/Home.vue'),
    meta: {
      layout: 'AppLayoutHome'
    }
  },
  { 
    path: '/about',
    name: 'About',
    // component: () => import('@/components/About.vue'),
    meta: {
      layout: 'AppLayoutAbout'
    }
  },
  { 
    path: '/contacts',
    name: 'Contacts',
    // component: () => import('@/components/Contacts.vue'),
    meta: {
      layout: 'AppLayoutContacts'
    }
  },
  { 
    path: '/blog',
    name: 'Blog',
    // component: () => import('@/components/Blog.vue'),
    meta: {
      layout: 'AppLayoutBlog'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router