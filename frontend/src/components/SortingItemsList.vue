<template>
  <div>
    <h3 class="sidebar-menu-body-header">3. Sort them by criteria</h3>
    <ul class="sortcategory-list">
      <li v-for="(sortItem, index) in sortingItems" class="sort-category" :key="sortItem">
        <button @click="setSortingCriteria(sortItem)">
          <font-awesome-icon v-if="sortItem === '-name'"
            icon="sort-alpha-down" size="2x" />
          <font-awesome-icon v-if="sortItem === 'name'"
            icon="sort-alpha-up" size="2x" />
          <font-awesome-icon v-if="sortItem === '-price'"
            icon="money-bill-alt" size="2x" />
          <font-awesome-icon v-if="sortItem === 'price'"
            icon="piggy-bank" size="2x" />
          <font-awesome-icon v-if="sortItem === '-time'"
            icon="sort-amount-down" size="2x" />
          <font-awesome-icon v-if="sortItem === 'time'"
            icon="sort-amount-up" size="2x" />
            {{ sortItemCriteria[index] }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortingItems: ['-name', 'name', '-price', 'price', '-time', 'time'],
    };
  },
  computed: {
    sortItemCriteria() {
      return this.sortingItems.map(item => (item[0] === '-' ? item.slice(1, 2).toUpperCase() + item.slice(2)
        : item.slice(0, 1).toUpperCase() + item.slice(1)));
    },
  },
  methods: {
    setSortingCriteria(item) {
      this.$emit('sortcriteria', item);
    },
  },
};
</script>

<style scoped>
  button {
    width: 50px;
    padding: 0;
    text-align: center;
    border: none;
    background: #ddd;
    outline: none;
  }
  .sort-category {
    display: inline-block;
    width: 30%;
    margin-bottom: 12px;
  }
  .sidebar-menu-body-header {
    padding: 24px 0;
    text-align: center;
    font-size: 22px;
  }
  .sortcategory-list {
    text-align: center;
  }
</style>
