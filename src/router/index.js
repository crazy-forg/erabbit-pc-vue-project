import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/Layout'),
    children: [
      {
        path: '/',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home')
      },
      {
        path: '/category/:id',
        component: () =>
          import(/* webpackChunkName: "topCategory" */ '@/views/category')
      },
      {
        path: '/category/sub/:id',
        component: () =>
          import(/* webpackChunkName: "subCategory" */ '@/views/category/sub')
      }
    ]
  }
]

const router = createRouter({
  // 使用哈希路由
  history: createWebHashHistory(),
  routes
})

export default router
