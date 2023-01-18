import Vue from 'vue'
// import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import VueRouter from "vue-router"
import AllFilmsPage from "@/pages/AllFilmsPage";
import MainPage from '@/pages/MainPage'
import FilmPage from "@/pages/FilmPage";
import NotFound from "@/pages/404"
import FilmsLayout from "@/pages/FilmsLayout";


Vue.use(VueRouter)





export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/films',
      name: 'filmsLayout',
      component: FilmsLayout,
      children: [
        {
          path: '',
          name: 'films',
          component: AllFilmsPage
        },
        {
          path: ':id',
          name: 'filmPage',
          component: FilmPage,
          beforeEnter: ( to,from,next ) => {
            if(localStorage.getItem('auth')) {
              next ()
            } else {
              next ({ name: 'films'} )
            }
          }
        },
        {
          path: '*/*',
          redirect: { name: 'films' }
        },

      ]
    },

    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ]
})


// const router = new VueRouter({
//
//   base: process.env.BASE_URL,
//   routes
// })


// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: function () {
//       return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//     }
//   }
// ]