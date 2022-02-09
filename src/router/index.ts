import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Index from '@/views/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Index,
    meta: {
      title: '开始'
    }
  },
  {
    path: '/create-role',
    name: 'createRole',
    component: () => import('@/views/create-role/index.vue'),
    meta: {
      title: '创建角色'
    }
  },
  {
    path: '/world',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: ':map/:coordinate',
        name: 'world',
        component: () => import('@/views/world/index.vue')
      }
    ]
  },
  {
    path: '/dev',
    name: 'dev',
    component: () => import('@/dev/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue')
  }
]

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes: routes
})

export default router
