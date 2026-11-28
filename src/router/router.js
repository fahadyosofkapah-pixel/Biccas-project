import Layout from '../layout/index.vue'
import HomeView from '../views/Homeview.vue'
// import AboutView from '../views/AboutView.vue'
// import support from '../components/support.vue';
import Benifit from '../components/Benifit.vue';
import features from '../components/features.vue';
import planCard from '../components/PlanCard.vue';
// import HeroSection from '../components/HeroSection.vue'
import Saying from '../components/Saying.vue';


export const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', component: HomeView },
      { path: 'features', component: features} ,
      { path: ' Benifit', component: Benifit} ,
      { path: ' Saying ', component: Saying } ,
      { path: ' planCard', component: planCard } ,

    ],
  },
]