import Vue from 'vue'
import Router from 'vue-router'
import Recepies from '@/components/Recepies'
import Recepies from '@/components/NewRecepie'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/recepies',
      name: 'recepies',
      component: Recepies
    },
    {
      path: '/recepies/new',
      name: 'newRecepie',
      component: NewRecepie
    }
  ]
})
