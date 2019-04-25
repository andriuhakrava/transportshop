import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';
// import { router } from './router';
import auth from './modules/auth';
import categories from './modules/categories';
import products from './modules/products';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    categories,
    products
  }
});

// export default new Vuex.Store({
//   state: {
//   	// categories: [],
//   	// products: [],
//   	// product: '',
//     // user: ''
//   },
//   mutations: {
//   	// setCategories(state, payload){
//   	// 	state.categories = payload;
//   	// },
//   	// setProducts(state, payload){
//   	// 	state.products = payload;
//   	// },
//   	// setProduct(state, payload){
//   	// 	state.product = payload;
//   	// },
//     // setUser(state, payload){
//     //   state.user = payload;
//     // },
//     // addCategory(state, payload){
//     //   state.categories.push(payload);
//     // },
//     // addProduct(state, payload){
//     //   state.products.push(payload);
//     // }
//   },
//   actions: {
//   	// getCategories({ commit }){
//   	// 	axios.get('/categories/')
//   	// 				.then(response => {
//   	// 					console.log(response.data, typeof response.data);
//   	// 					commit('setCategories', response.data);
//   	// 				});
//   	// },
//   	// getProducts({ commit }, params){
//   	// 	axios.get('/products/', { params })
//   	// 				.then(response => {
//   	// 					commit('setProducts', response.data);
//   	// 				})
//   	// },
//   	// getSingleProduct({ commit }, id){
//   	// 	axios.get(`/product/${id}`)
//   	// 				.then(response => {
//   	// 					console.log(response.data);
//   	// 					commit('setProduct', response.data);
//   	// 				});
//   	// },
//     // signIn({ commit }, { user } ){
//     //   axios.post('/login', user)
//     //         .then(response => {
//     //           // console.log(response.data);
//     //           localStorage.setItem('jwtoken', response.data[0].token);
//     //           commit('setUser', response.data[0]);
//     //           router.push('/admin');
//     //         });
//     // },
//     // signOut({ commit }){
//     //   localStorage.removeItem('jwtoken');
//     //   commit('setUser', null);
//     //   router.push('/');
//     // },
//     // addCategory({ commit }, { category }){
//     //   const token = localStorage.getItem('jwtoken');
//     //   axios.post('/categori', category, { headers: { Authorization: `Token ${token}` } })
//     //         .then(response => {
//     //           console.log(response.data);
//     //           commit('addCategory', response.data);
//     //         })
//     // },
//     // addProduct({ commit }, { product }){
//     //   const token = localStorage.getItem('jwtoken');
//     //   axios.post('/product', product, { headers: { Authorization: `Token ${token}` } })
//     //         .then(response => {
//     //           console.log(response.data);
//     //           commit('addProduct', response.data);
//     //         })
//     // }
//   },
// });
