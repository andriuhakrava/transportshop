import Vue from 'vue';
import App from './App.vue';
import { router } from './router';
import store from './store';
import axios from 'axios';
import Vuelidate from 'vuelidate';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTruck, faTrain, faBus, faMotorcycle, faCar, faAngleDown, faAngleUp,
faClipboard, faSortAlphaDown, faSortAlphaUp, faMoneyBillAlt, faPiggyBank,
faSortAmountDown, faSortAmountUp, faUserTie, faSignInAlt, faDoorOpen,
faPlusSquare, faPlusCircle, faPlus, faWalking, faCartPlus, faShip, faBicycle,
faHelicopter
 } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText }
 from '@fortawesome/vue-fontawesome';

library.add( faTruck, faTrain, faBus, faMotorcycle, faCar, faAngleDown, faAngleUp,
faClipboard, faSortAlphaDown, faSortAlphaUp, faMoneyBillAlt, faPiggyBank,
faSortAmountDown, faSortAmountUp, faUserTie, faSignInAlt, faDoorOpen,
faPlusSquare, faPlusCircle, faPlus, faWalking, faCartPlus, faShip, faBicycle,
faHelicopter);

Vue.component('font-awesome-icon', FontAwesomeIcon);

axios.defaults.baseURL = 'http://localhost:8080/api/v1';

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
