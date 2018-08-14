import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Admin from '@/components/admin/Admin.vue'
import Article from '@/components/addarticle.vue'


// import Home from '../components/Home'
// import Admin from '../components/admin/Admin'
// import Article from '../components/Article.vue'

Vue.use(Router)

export default new Router({
  routes: [
    
      { 
        path: '/',
       component: Home,
        name: 'Home'
       },
      {
         path: '/home', 
      component: Home,
       name: 'Home' 
      },
      {
         path: '/addarticle', 
      component: Article, 
      name: 'Article'
     },
      { 
        path: '/admin', 
      component: Admin, 
      name: 'Admin' 
    }
    
  ],
  mode:"history"
})






// import VueRouter from 'vue-router'
// import Vue from 'vue'


// Vue.use(VueRouter)

// const routes = [
//   { path: '/', component: Home, name: 'Home' },
//   { path: '/home', component: Home, name: 'Home' },
//   { path: '/addarticle', component: Article, name: 'Article' },
//   { path: '/admin', component: Admin, name: 'Admin' }
// ]

// export default new VueRouter({
//   mode: 'history',
//   routes // short for `routes: routes`
// })
