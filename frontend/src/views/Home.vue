<template>
  <div class="home-wrapper">
    <Sidebar />
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
    categoriesList() {
      return this.$store.getters.categories;
    },
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
