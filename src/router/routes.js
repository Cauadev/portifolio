const routes = [
    {
      path: '/home',
      name: 'Home',
      component: () => import( '../pages/Home.vue')
    }
  ]

  export default routes