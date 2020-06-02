import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Classify from '../views/Classify.vue'
import Search from '../views/Search.vue'
import Hots from '../views/Hots.vue'
import Mine from '../views/Mine.vue'
import Detail from '../views/Detail.vue'
import SchoolList from '../views/SchoolList.vue'
import Discounts from '../views/Discounts.vue'
import Job from '../views/Job.vue'
import Buy from '../views/Buy.vue'
import Buydetail from '../views/Buydetail.vue'
import Recruitment_details from '../views/Recruitment_details.vue'
import GoodDetail from '../views/GoodDetail.vue'
import Login from '../views/Login.vue'
import PersonalData from '../views/PersonalData.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
	meta:{
		tabbar:true
	}
  },
  {
    path: '/classify',
    name: 'classify',
    component: Classify,
	meta:{
		tabbar:true
	}
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/hots',
    name: 'hots',
    component: Hots,
	meta:{
		tabbar:true
	}
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine,
	meta:{
		tabbar:true
	}
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  },
  {
    path: '/schoolList',
    name: 'schoolList',
    component: SchoolList
  },
  {
    path: '/discounts',
    name: 'discounts',
    component: Discounts
  },
  {
    path: '/job',
    name: 'job',
    component: Job
  },
  {
    path: '/buy',
    name: 'buy',
    component: Buy
  },
  {
    path: '/buydetail/:id',
    name: 'buydetail',
    component: Buydetail
  },
  {
    path: '/Recruitment_details/:id',
    name: 'Recruitment_details',
    component: Recruitment_details
  },
  {
    path: '/goodDetail',
    name: 'goodDetail',
    component: GoodDetail
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/personalData',
    name: 'personalData',
    component: PersonalData
  }
]

const router = new VueRouter({
  routes
})

export default router
