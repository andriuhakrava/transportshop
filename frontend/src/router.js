import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Contacts from './views/Contacts.vue';
import ProductDetails from './views/ProductDetails.vue';
import Admin from './views/Admin.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import AddProduct from './components/AddProduct.vue';
import AddCategory from './components/AddCategory.vue';
import PageNotFound from './views/PageNotFound.vue';
import store from './store';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: '404',
      component: PageNotFound
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts,
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductDetails
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: 'addcategory',
          name: 'addcategory',
          component: AddCategory
        },
        {
          path: 'addproduct',
          name: 'addproduct',
          component: AddProduct
        }
      ]
    },
    // {
    //   path: '/addproduct',
    //   name: 'addproduct',
    //   component: AddProduct,
    //   meta: {
    //     requiresAuth: true
    //   }
    // },
    // {
    //   path: '/addcategory',
    //   name: 'addcategory',
    //   component: AddCategory,
    //   meta: {
    //     requiresAuth: true
    //   }
    // }
  ]
});

// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)){
//     if (localStorage.getItem('jwtoken')){
//       // store.dispatch('checkUser', localStorage.getItem('jwtoken'))
//       next();
//     } else {
//       next('/login');
//     }
//   } else {
//     next();
//   }
// });

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if (localStorage.getItem('jwtoken')){
      console.log(localStorage.getItem('jwtoken'));
      store.dispatch('checkUser', localStorage.getItem('jwtoken'))
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});