import axios from 'axios';

// const state = {
//   products: [],
//   product: '',
//   loadingProducts: true,
// };

// const mutations = {
//   setProducts(state, payload){
//     state.products = payload;
//   },
//   setProduct(state, payload){
//     state.product = payload;
//   },
//   addProduct(state, payload){
//     state.products.push(payload);
//   },
//   setLoadingProducts(state, payload) {
//     state.loadingProducts = payload;
//   }
// };

// const actions = {
//   getProducts({ commit }, params){
//     commit('setLoadingProducts', true);
//     axios.get('/products/', { params })
//           .then(response => {
//             commit('setProducts', response.data);
//             commit('setLoadingProducts', false);
//           })
//   },
//   getSingleProduct({ commit }, id){
//     axios.get(`/product/${id}`)
//           .then(response => {
//             console.log(response.data);
//             commit('setProduct', response.data);
//           });
//   },
//   addProduct({ commit }, { product }){
//     const token = localStorage.getItem('jwtoken');
//     axios.post('/product', product, { headers: { Authorization: `Token ${token}` } })
//           .then(response => {
//             console.log(response.data);
//             commit('addProduct', response.data);
//           })
//   }
// };

// export default  {
//   state,
//   mutations,
//   actions
// }

export default {
  namespaced: true,
  state: {
    products: [],
    product: '',
    loadingProducts: true,
  },
  getters: {
    products: state => state.products,
    product: state => state.product,
    loadingProducts: state => state.loadingProducts
  },
  mutations: {
    setProducts(state, payload){
      state.products = payload;
    },
    setProduct(state, payload){
      state.product = payload;
    },
    addProduct(state, payload){
      state.products.push(payload);
    },
    setLoadingProducts(state, payload) {
      state.loadingProducts = payload;
    }
  },
  actions: {
    getProducts({ commit }, params){
      commit('setLoadingProducts', true);
      axios.get('/products/', { params })
            .then(response => {
              commit('setProducts', response.data);
              commit('setLoadingProducts', false);
            })
    },
    getSingleProduct({ commit }, id){
      axios.get(`/product/${id}`)
            .then(response => {
              console.log(response.data);
              commit('setProduct', response.data);
            });
    },
    addProduct({ commit }, { product }){
      const token = localStorage.getItem('jwtoken');
      axios.post('/product', product, { headers: { Authorization: `Token ${token}` } })
            .then(response => {
              console.log(response.data);
              commit('addProduct', response.data);
            })
    }
  }
}
