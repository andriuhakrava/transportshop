import axios from 'axios';

// const state = {
//   categories: [],
//   loadingCategory: true
// };

// const mutations = {
//   setCategories(state, payload){
//     state.categories = payload;
//   },
//   addCategory(state, payload){
//     state.categories.push(payload);
//   },
//   setLoadingCategory(state, payload) {
//     state.loadingCategory = payload;
//   }
// };

// const actions = {
//   getCategories({ commit }){
//     commit('setLoadingCategory', true);
//     axios.get('/categories/')
//           .then(response => {
//             console.log(response.data, typeof response.data);
//             commit('setCategories', response.data);
//             commit('setLoadingCategory', false);
//           });
//   },
//   addCategory({ commit }, { category }){
//     const token = localStorage.getItem('jwtoken');
//     axios.post('/categori', category, { headers: { Authorization: `Token ${token}` } })
//           .then(response => {
//             console.log(response.data);
//             commit('addCategory', response.data);
//           })
//   },
// };

// export default  {
//   state,
//   mutations,
//   actions
// }

export default {
  namespaced: true,
  state: {
    categories: [],
    loadingCategory: true
  },
  getters: {
    categories: state => state.categories,
    loadingCategory: state => state.loadingCategory
  },
  mutations: {
    setCategories(state, payload){
      state.categories = payload;
    },
    addCategory(state, payload){
      state.categories.push(payload);
    },
    setLoadingCategory(state, payload) {
      state.loadingCategory = payload;
    }
  },
  actions: {
    getCategories({ commit }){
      commit('setLoadingCategory', true);
      axios.get('/categories/')
            .then(response => {
              console.log(response.data, typeof response.data);
              commit('setCategories', response.data);
              commit('setLoadingCategory', false);
            });
    },
    addCategory({ commit }, { category }){
      const token = localStorage.getItem('jwtoken');
      axios.post('/categori', category, { headers: { Authorization: `Token ${token}` } })
            .then(response => {
              console.log(response.data);
              commit('addCategory', response.data);
            })
    },
  }
}