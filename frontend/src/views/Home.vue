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
	// data(){
	// 	return {
	// 		isOpen: false
	// 	}
	// },
	computed: {
		categoriesList(){
			return this.$store.state.categories;
		},
		productsList(){
			return this.$store.state.products;
		},
		loading(){
			return this.$store.state.loading;
		}
	},
	components: {
		Sidebar,
		ProductsList
	},
	created(){
		console.log('Created');
    this.$store.dispatch('getProducts');
  },
  // methods: {
  // 	toggleSidebar(){
  // 		this.isOpen = !this.isOpen;
  // 	}
  // }
}
</script>

<style scoped>
	/*.home-wrapper {
		display: flex;
	}*/
	.fade-enter-active {
    animation: fade-in 300ms ease-out forwards;
  }
  .fade-leave-active {
    animation: fade-out 300ms ease-out forwards;
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>