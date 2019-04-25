import axios from 'axios';
import { router } from '../../router.js';

// const state = {
//   user: '',
// };

// const mutations = {
//   setUser(state, payload){
//     state.user = payload;
//   },
// };

// const actions = {
//   signIn({ commit }, { user } ){
//     axios.post('/login', user)
//           .then(response => {
//             // console.log(response.data);
//             localStorage.setItem('jwtoken', response.data[0].token);
//             commit('setUser', response.data[0]);
//             router.push('/admin');
//           });
//   },
//   signOut({ commit }){
//     localStorage.removeItem('jwtoken');
//     commit('setUser', null);
//     router.push('/');
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
    user: ''
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    setUser(state, payload){
      state.user = payload;
    }
  },
  actions: {
    signIn({ commit }, { user } ){
      axios.post('/login', user)
            .then(response => {
              // console.log(response.data);
              localStorage.setItem('jwtoken', response.data[0].token);
              commit('setUser', response.data[0]);
              router.push('/admin');
            });
    },
    signOut({ commit }){
      localStorage.removeItem('jwtoken');
      commit('setUser', null);
      router.push('/');
    },
  }
}