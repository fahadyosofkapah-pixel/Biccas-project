import Layout from '../layout/index.vue'
import HomeView from '../views/Homeview.vue'
import AboutView from '../views/AboutView.vue'
import loginvew from '../views/loginvew.vue'
 

export const routes = [
  {  
    path: '/',
    component: Layout,
    children: [
      { path: '', component: HomeView },
      { path: 'about', component: AboutView},
      { path: 'login', component: loginvew}
      
    ],
  },
]