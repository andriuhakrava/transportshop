<template>
	<div class="products" v-if="products">
			<product v-for="product in products" 
									:key="product.id" 
									:singleproduct="product" />
	</div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
	export default {
		props: ['products'],
		components: {
			product: ProductCard
		}
	}
</script>

<style scoped>
	.products {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>