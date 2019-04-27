import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
    products: [],
    product: '',
    user: '',
    loading: false,
  },
  getters: {
    categories: state => state.categories,
    products: state => state.products,
    product: state => state.product,
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setCategories(state, payload) {
      state.categories = payload;
    },
    setProducts(state, payload) {
      state.products = payload;
    },
    setSingleProduct(state, payload) {
      state.product = payload;
    },
    addCategory(state, payload) {
      state.categories.push(payload);
    },
    addProduct(state, payload) {
      state.products.push(payload);
    },
  },
  actions: {
    getCategories({ commit }) {
      commit('setLoading', true);
      axios.get('/categories/')
        .then((response) => {
          commit('setCategories', response.data);
          commit('setLoading', false);
        });
    },
    getProducts({ commit }, params) {
      commit('setLoading', true);
      axios.get('/products/', { params })
        .then((response) => {
          commit('setProducts', response.data);
          commit('setLoading', false);
        });
    },
    getSingleProduct({ commit }, id) {
      commit('setLoading', true);
      axios.get(`/product/${id}`)
        .then((response) => {
          commit('setLoading', false);
          commit('setSingleProduct', response.data);
        });
    },
    registerAdmin({ commit }, { user }) {
      axios.post('/register ', user)
        .then((response) => {
          localStorage.setItem('jwtoken', response.data[0].token);
          commit('setUser', response.data[0].email);
          router.push('/admin');
        });
    },
    signIn({ commit }, { user }) {
      axios.post('/login', user)
        .then((response) => {
          localStorage.setItem('jwtoken', response.data[0].token);
          commit('setUser', response.data[0]);
          router.push('/admin');
        });
    },
    signOut({ commit }) {
      localStorage.removeItem('jwtoken');
      commit('setUser', null);
      router.push('/');
    },
    addCategory({ commit }, { categori }) {
      const token = localStorage.getItem('jwtoken');
      axios.post('/categori', categori, { headers: { Authorization: `Token ${token}` } })
        .then((response) => {
          commit('addCategory', response.data);
        })
        .catch(() => {
          localStorage.removeItem('jwtoken');
          router.push('/login');
        });
    },
    addProduct({ commit }, { product }) {
      const token = localStorage.getItem('jwtoken');
      axios.post('/product', product, { headers: { Authorization: `Token ${token}` } })
        .then((response) => {
          commit('addProduct', response.data);
        })
        .catch(() => {
          localStorage.removeItem('jwtoken');
          router.push('/login');
        });
    },
    checkUser({ commit }) {
      const token = localStorage.getItem('jwtoken');
      axios.post('/auth-token', { token })
        .then((response) => {
          commit('setUser', response.data[0].email);
        })
        .catch(() => {
          localStorage.removeItem('jwtoken');
          router.push('/login');
        });
    },
  },
});
