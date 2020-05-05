import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductItem from '../views/ProductItem/Product.vue'
import SignUp from '../views/SignUp/SignUp.vue'
import Login from '../views/Login/Login.vue'
import HomePage from '../views/HomePage/HomePage.vue'
import UploadMedia from '../views/UploadMedia/UploadMedia.vue'
import Message from '../views/Message/Message.vue'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'product',
    component: ProductItem
  },

  {
    path: '/SignUp',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/Login',
    name: 'login',
    component: Login
  },
  {
    path: '/HomePage',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/UploadMedia',
    name: 'UploadMedia',
    component: UploadMedia,
  },
  {
    path: '/Message',
    name: 'Message',
    component: Message,
  }
  
]

const router = new VueRouter({
  routes
})

export default router
