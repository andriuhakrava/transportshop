import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { router } from './router';
// import auth from './modules/auth';
// import categories from './modules/categories';
// import products from './modules/products';

Vue.use(Vuex);

// export default new Vuex.Store({
//   modules: {
//     auth,
//     categories,
//     products
//   }
// });

export default new Vuex.Store({
  state: {
  	categories: [],
  	products: [],
  	product: '',
    user: '',
    loading: false
    // isAuthenticated: false
  },
  mutations: {
  	setLoading(state, payload){
  		state.loading = payload;
  	},
    // setAuthenticatedUser(state, payload){
    //   state.isAuthenticated = payload;
    // },
  	setCategories(state, payload){
  		state.categories = payload;
  	},
  	setProducts(state, payload){
  		state.products = payload;
  	},
  	setProduct(state, payload){
  		state.product = payload;
  	},
    setUser(state, payload){
      state.user = payload;
    },
    addCategory(state, payload){
      state.categories.push(payload);
    },
    addProduct(state, payload){
      state.products.push(payload);
    }
  },
  actions: {
  	getCategories({ commit }){
  		commit('setLoading', true);
  		axios.get('/categories/')
  					.then(response => {
  						console.log(response.data, typeof response.data);
  						commit('setCategories', response.data);
  						commit('setLoading', false);
  					});
  	},
  	getProducts({ commit }, params){
  		commit('setLoading', true);
  		axios.get('/products/', { params })
  					.then(response => {
  						commit('setProducts', response.data);
  						commit('setLoading', false);
  					})
  	},
  	getSingleProduct({ commit }, id){
      commit('setLoading', true);
  		axios.get(`/product/${id}`)
  					.then(response => {
  						console.log(response.data);
              commit('setLoading', false);
  						commit('setProduct', response.data);
  					});
  	},
    signIn({ commit }, { user } ){
      axios.post('/login', user)
            .then(response => {
              // console.log(response.data);
              localStorage.setItem('jwtoken', response.data[0].token);
              commit('setUser', response.data[0]);
              router.push('/admin');
            })
            .catch(error => console.log(error));
    },
    signOut({ commit }){
      localStorage.removeItem('jwtoken');
      commit('setUser', null);
      router.push('/');
    },
    addCategory({ commit }, { categori }){
      const token = localStorage.getItem('jwtoken');
      axios.post('/categori', categori, { headers: { Authorization: `Token ${token}` } })
            .then(response => {
              console.log(response.data);
              commit('addCategory', response.data);
            })
            .catch(error => {
              localStorage.removeItem('jwtoken');
              router.push('/login');
              console.log(error);
            });
    },
    addProduct({ commit }, { product }){
      const token = localStorage.getItem('jwtoken');
      axios.post('/product', product, { headers: { Authorization: `Token ${token}` } })
            .then(response => {
              console.log('SUCCESS!', response.data);
              commit('addProduct', response.data);
            })
            .catch(error => {
              localStorage.removeItem('jwtoken');
              router.push('/login');
              console.log(error);
            });
    },
    checkUser(){
      const token = localStorage.getItem('jwtoken');
      axios.post('/auth-token', {token})
            .then(response => console.log('GOOD Token', response.data))
            .catch(error => {
              console.log(error);
              localStorage.removeItem('jwtoken');
              router.push('/login');
            });
    }
  },
});
