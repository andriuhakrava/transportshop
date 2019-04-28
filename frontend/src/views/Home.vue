<template>
  <div class="home-wrapper">
    <Sidebar />
    <div v-if="loading" class="img-loader">
      <img src="../../public/images/loader.gif" height="350" width="350" alt="loading" />
    </div>
    <template v-if="!loading">
      <transition name="fade" mode="out-in">
        <ProductsList :products="productsList" />
      </transition>
    </template>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import ProductsList from '../components/ProductsList.vue';

export default {
  computed: {
    productsList() {
      return this.$store.getters.products;
    },
    loading() {
      return this.$store.state.loading;
    },
  },
  components: {
    Sidebar,
    ProductsList,
  },
  created() {
    this.$store.dispatch('getProducts');
  },
};
</script>
