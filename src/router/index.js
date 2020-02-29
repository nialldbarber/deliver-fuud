import Vue from 'vue'
import Router from 'vue-router'
import Home from '~/views/home.vue'
import Restaurant from '~/views/restaurant.vue'
import Cart from '~/views/cart.vue'
import Help from '~/views/help.vue'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/store/:id',
      name: 'store',
      props: true,
      component: Restaurant
    },
    {
      path: '/cart',
      name: 'cart',
      props: true,
      component: Cart
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    },
  ]
})
