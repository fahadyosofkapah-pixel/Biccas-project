import Layout from '../layout/index.vue'
import HomeView from '@/views/Homeview.vue'
// import serviceVue from '@/views/serviceVue.vue'
// import Aboutview from '@/views/Aboutview.vue'

export const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', component: HomeView }, 
      { path: '/aboutview', component: Aboutview }, 
    //   { path: '/serviceview', component: serviceVue }, 
    ],
  },
]