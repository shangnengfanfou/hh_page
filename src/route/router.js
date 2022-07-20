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
    path: '/notes/:articleParams*',
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
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition
    }
    return {x: 0, y: 0}
  }
})

export default router