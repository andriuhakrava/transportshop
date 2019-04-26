<template>
	<div class="sidebar-menu" :class="sidebarClasses">
		<h2 class="sidebar-menu-header">
			<span @click="toggleSidebar">
				<font-awesome-icon v-if="isClosed" icon="angle-down" size="lg" />
				<font-awesome-icon v-else icon="angle-up" size="lg" />
				Choose your best transport right here
			</span>
		</h2>
		<div class="sidebar-menu-body">
			<div class="sidebar-menu-body-step">
				<h3 class="sidebar-menu-body-header">1. Try Find transport</h3>
				<input type="text" v-model="searchQuery" class="searchcar-input" />
			</div>
			<div class="sidebar-menu-body-step">
				<!-- {{ selectedCategory }} -->
				<Categories @filtercat="filterByCategory" @allcat="getAllProducts"
										:selectedFilter="selectedCategory" />
			</div>
			<div class="sidebar-menu-body-step sorting-step">
				<SortByItems @sortcriteria="setSort" />
			</div>
		</div>
	</div>
</template>

<script>
import CategoryList from './CategoryList.vue';
import SortingItemsList from '../components/SortingItemsList.vue'
import { mapActions } from 'vuex';

	export default {
		data(){
			return {
				selectedCategory: '',
				searchQuery: '',
				sortBy: '',
				isClosed: true
			}
		},
		components: {
			Categories: CategoryList,
			SortByItems: SortingItemsList
		},
		computed: {
			sidebarClasses(){
				return { 'is-closed': this.isClosed }
			},
		},
		watch: {
			searchQuery(newVal, oldVal){
				if (newVal !== oldVal) this.fetchProducts();
			},
			selectedCategory(newVal, oldVal){
				if (newVal !== oldVal) this.fetchProducts();
			},
			sortBy(newVal, oldVal){
				if (newVal !== oldVal) this.fetchProducts();
			}
		},
		created(){
			this.$store.dispatch('getCategories');
		},
		methods: {
			...mapActions(['getProducts']),
			toggleSidebar(){
	  		this.isClosed = !this.isClosed;
	  	},
			filterByCategory(category){
				console.log('Hello!');
				this.selectedCategory = category;
			},
			getAllProducts(category){
				this.selectedCategory = '';
			},
			findCar(car){
				this.searchQuery = car;
			},
			setSort(sortItem){
				this.sortBy = sortItem;
				console.log(this.sortBy, typeof this.sortBy);
			},
			fetchProducts(){
				const params = {};
				if (this.selectedCategory) params.cat = this.selectedCategory;
				params.searchQ = this.searchQuery;
				params.sortBy = this.sortBy;
				this.getProducts(params);
			},
		}
	}
</script>

<style scoped>
	.sidebar-menu {
		min-width: 175px;
		padding: 25px 0;
		margin-bottom: 35px;
		/*width: 100%;*/
		background: #ddd;
	}
	.sidebar-menu-header {
		text-align: center;
		padding: 0 22px;
	}
	.sidebar-menu-header > span {
		cursor: pointer;
		user-select: none;
	}
	.sidebar-menu-body {
		display: flex;
		flex-wrap: wrap;
		padding: 0;	
		max-height: 35em;
		overflow: hidden;	
		transition: .6s ease all;
	}
	.sidebar-menu-body-step {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-basis: 320px;
	}
	.is-closed .sidebar-menu-body {
		max-height: 0;
	}
	.searchcar-input {
		/*margin: 0 auto;*/
		max-width: 280px;
		padding: 8px 16px;
		box-sizing: border-box;
		font-size: 1.2em;
		border: 1px solid #ccc;
		border-radius: 5px;
		border: none;
		outline: none;
	}
	button {
		width: 50px;
		padding: 0;
		text-align: center;
		border: none;
		background: #ddd;
		outline: none;
	}
	.sidebar-menu-body-header {
		padding: 24px 0;
		font-size: 22px;
	}
	@media screen and (max-width: 999px){
		.sidebar-menu-body {
			flex-direction: column;
			flex-wrap: nowrap;
		}
		.sidebar-menu-body-step{
			display: flex;
		}
	}
	@media screen and (max-width: 600px){
		.sidebar-menu-header {
			font-size: 29px;
		}
	}
	@media screen and (max-width: 470px){
		.sidebar-menu-header {
			font-size: 23px;
		}
		.sidebar-menu-body-header {
			font-size: 20px;
		}
	}
</style>