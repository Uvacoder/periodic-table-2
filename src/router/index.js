import { createRouter, createWebHistory } from 'vue-router'

// Views
import Table from '@/views/Table'

const routes = [
  {
    path: '/',
    name: 'Table',
    component: Table
  },
  {
    path: '/:element',
    name: 'Details',
    component: () =>
      import(/* webpackChunkName: "details" */ '@/views/details'),
    redirect: { name: 'DetailsInfos' },
    children: [
      {
        path: 'infos',
        name: 'DetailsInfos',
        component: () =>
          import(
            /* webpackChunkName: "infos" */ '@/views/details/modules/infos.vue'
          )
      },
      {
        path: 'model',
        name: 'DetailsModel',
        component: () =>
          import(
            /* webpackChunkName: "infos" */ '@/views/details/modules/infos.vue'
          )
      },
      {
        path: 'images',
        name: 'DetailsImages',
        component: () =>
          import(
            /* webpackChunkName: "infos" */ '@/views/details/modules/infos.vue'
          )
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
