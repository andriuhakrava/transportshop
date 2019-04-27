<template>
  <div>
    <ul class="sortcategory-list">
      <h3 class="sidebar-menu-body-header">2. Filter it by your wish</h3>
      <li class="filter-category">
        <button @click="getAllProducts">
          <font-awesome-icon icon="clipboard" size="2x" id="all-icon" />
        </button>
        All
      </li>
      <li v-for="category in categories" :key="category.id" class="filter-category">
        <button @click="filterByCategory(category.short)">
          <font-awesome-icon v-if="category.name.toLowerCase() === 'cars'"
                             icon="car" size="2x" />
          <font-awesome-icon v-else-if="category.name.toLowerCase() === 'moto'"
                             icon="motorcycle" size="2x" />
          <font-awesome-icon v-else
                             :icon="category.name.toLowerCase()" size="2x" />
        </button>
        {{ category.name }}
      </li>
    </ul>
    <div class="selected-category" v-if="selectedCategory">
      Selected: <strong>{{ selectedCategory }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  props: ['selectedFilter'],
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
    selectedCategory() {
      return this.selectedFilter.slice(0, 1).toUpperCase()
             + this.selectedFilter.slice(1);
    },
  },
  created() {
    this.$store.dispatch('getCategories');
  },
  methods: {
    filterByCategory(category) {
      this.$emit('filtercat', category);
    },
    getAllProducts() {
      this.$emit('allcat');
    },
  },
};
</script>

<style scoped>
  button {
    width: 45px;
    padding: 0;
    text-align: left;
    border: none;
    background: #ddd;
    outline: none;
  }
  .selected-category {
    margin-bottom: 17px;
    text-align: center;
  }
  .filter-category {
    display: inline-block;
    width: 30%;
    margin-bottom: 16px;
  }
  .sidebar-menu-body-header {
    text-align: center;
    padding: 24px 0;
    font-size: 22px;
  }
  .sortcategory-list {
    text-align: center;
  }
</style>
