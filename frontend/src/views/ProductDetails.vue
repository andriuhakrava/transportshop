<template>
	<div>
		<div v-if="loading" class="img-loader">
			<img 	src="../../public/images/H8rC.gif" 
						height="350" 
						width="350" 
						alt="loading" />
		</div>
		<div v-else class="product-details-card">
			<!-- {{ product }} -->
			<h3 class="product-card-header">{{ product.name }}</h3>
			<div class="product-card-info">
				<!-- <p>Name: {{ singleproduct.name }}</p> -->
				<p v-if="product.images[0]">
					<img :src="product.images[0]" alt="product.name" class="product-img" />
				</p>
				<p><span class="product-card-info-badge">Brand: </span>{{ product.brand }}</p>
				<p><span class="product-card-info-badge">Model: </span>{{ product.model }}</p>
				<p><span class="product-card-info-badge">Description: </span>{{ product.descriptions }}</p>
				<!-- <p>
					<span class="product-card-info-badge">Engine: </span>
					{{ product.specifications.engine }}
				</p> -->
				<!-- {{ product.specifications.engine }}</p> -->
				<p><span class="product-card-info-badge">Price: </span>{{ product.price }} {{ product.currency | currency }}</p>
				<p><span class="product-card-info-badge">Added: </span><span class="product-card-info-date">{{ (new Date(product.date)).toLocaleString() }}</span></p>
			</div>
			<!-- <div class="product-card-info">
				
			</div> -->
		</div>
	</div>
</template>

<script>
// import { mapState } from 'vuex';
	export default {
		computed: {
			product(){
				return this.$store.state.product;
			},
    	loading(){
    		return this.$store.state.loading; 
    	},
		},
		created(){
			this.$store.dispatch('getSingleProduct', this.$route.params.id);
		},
		filters: {
			currency(value){
				if (!value) return '';
				if (value === 'usd') return '$';
			}
		}
	}
</script>

<style scoped>
	.product-details-card{
		max-width: 600px;
		margin: 0 auto;
		padding: 24px 36px;
		border: 3px solid #ddccee;
		border-radius: 18px;
		box-shadow: 0 4px 22px #ddd;
	}
	.product-card-header {
		margin-bottom: 18px;
		font-size: 32px;
		text-align: center;
	}
	.product-card-info-badge {
		font-weight: bold;
		font-size: 21px;
	}
	p {
		font-size: 19px;
	}
	.product-img {
		max-width: 600px;
		width: 100%;
	}
	.img-loader {
		text-align: center;
	}
</style>