import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/',
    name: 'Home',
    meta: {
      layout: 'AppLayoutAbout'
    }
  },
  { 
    path: '/notes',
    name: 'Notes',
    meta: {
      layout: 'AppLayoutNotes'
    }
  },
  { 
    path: '/bookmark',
    name: 'Bookmark',
    meta: {
      layout: 'AppLayoutBookmark'
    }
  },
  { 
    path: '/info',
    name: 'Info',
    meta: {
      layout: 'AppLayoutInfo'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router