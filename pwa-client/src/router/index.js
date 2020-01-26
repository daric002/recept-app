import Vue from 'vue'
import Router from 'vue-router'
import Recepies from '@/components/Recepies'
import NewRecepie from '@/components/NewRecepie'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/recepies',
      name: 'Recepies',
      component: Recepies
    },
    {
      path: '/recepies/new',
      name: 'NewRecepie',
      component: NewRecepie
    }
  ]
})
