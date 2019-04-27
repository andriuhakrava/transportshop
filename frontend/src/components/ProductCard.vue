<template>
  <div class="product-card">
    <router-link tag="div" :to="`/product/${singleproduct.id}`">
      <div class="product-card-icon">
        <font-awesome-icon v-if="singleproduct.category.toLowerCase() === 'cars'"
                           icon="car" size="2x" />
        <font-awesome-icon v-else-if="singleproduct.category.toLowerCase() === 'moto'"                   icon="motorcycle" size="2x" />
        <font-awesome-icon v-else
                           :icon="singleproduct.category.toLowerCase()" size="2x" />
      </div>
      <h3 class="product-card-header">{{ singleproduct.name }}</h3>
      <p v-if="singleproduct.images[0]">
        <img :src="singleproduct.images[0]" class="product-card-img"
             alt="singleproduct.name" />
      </p>
      <div class="product-card-info">
        <p>
          <span class="product-card-info-badge">Brand: </span>
          {{ singleproduct.brand }}
        </p>
        <p>
          <span class="product-card-info-badge">Model: </span>
          {{ singleproduct.model }}
        </p>
        <p v-if="singleproduct.specifications.engine">
          <span class="product-card-info-badge">Engine: </span>
          {{ singleproduct.specifications.engine }}
        </p>
      </div>
      <div class="product-card-info">
        <p>
          <span class="product-card-info-badge">Price: </span>
          {{ singleproduct.price }} {{ singleproduct.currency | currency }}
        </p>
      </div>
      <p>
        <span class="product-card-info-badge">Added: </span>
        <span class="product-card-info-date">
          {{ (new Date(singleproduct.date)).toLocaleString() }}
        </span>
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['singleproduct'],
  filters: {
    currency(value) {
      return (value === 'usd') ? '$' : '';
    },
  },
};
</script>

<style scoped>
  .product-card {
    display: inline-block;
    padding: 18px;
    box-sizing: border-box;
    margin: 14px;
    width: 30%;
    border: 2px solid #ddd;
    border-radius: 8px;
    box-shadow: 3px 5px 8px #ddccee;
    cursor: pointer;
  }
  .product-card:hover {
    transform: scale(1.1);
    transition: all .4s ease-out;
  }
  .product-card-icon {
    box-sizing: border-box;
    text-align: right;
  }
  .product-card-header {
    text-align: center;
    margin-bottom: 15px;
  }
  .product-card-info {
    display: inline-block;
    width: 50%;
    vertical-align: top;
  }
  .product-card-img {
    display: block;
    width: 100%;
  }
  .product-card-info-badge {
    font-weight: bold;
  }
  .product-card-info-date {
    font-size: 12px;
  }
  @media screen and (max-width: 999px){
    .product-card {
      display: inline-block;
      width: 45%;
    }
  }
  @media screen and (max-width: 768px){
    .product-card {
      display: inline-block;
      width: 85%;
    }
  }
</style>
