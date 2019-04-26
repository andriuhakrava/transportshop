<template>
	<div>
		<ul class="sortcategory-list" v-if="!loading">
			<h3 class="sidebar-menu-body-header">2. Filter it by your wish</h3>
			<li class="filter-category">
				<button @click="getAllProducts">
					<font-awesome-icon icon="clipboard" size="2x" id="all-icon" />
				</button>
				All
				<!-- {{ categories }} -->
			</li>
			<li v-for="category in categories" :key="category.id" class="filter-category">
				<button @click="filterByCategory(category.short)">
					<font-awesome-icon v-if="category.name.toLowerCase() === 'cars'" icon="car" size="2x" />
					<font-awesome-icon v-else-if="category.name.toLowerCase() === 'moto'" icon="motorcycle" size="2x" />
					<font-awesome-icon v-else :icon="category.name.toLowerCase()" size="2x" />
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
	// import { mapGetters } from 'vuex';
	export default {
		props: ['selectedFilter'],
		// data(){
		// 	return {
		// 		icon: '',
		// 		icons: ['truck', 'train', 'motorcycle', 'car', 'bus']
		// 	}
		// },
		computed: {
			// ...mapGetters(['categories/categories', categories/loadingCategory]),
			categories(){
				return this.$store.state.categories;
			},
			loading(){
				return this.$store.state.loadingCategory;
			},
			selectedCategory(){
				return this.selectedFilter.slice(0, 1).toUpperCase() + this.selectedFilter.slice(1);
			}
		},
		created(){
			this.$store.dispatch('getCategories');
		},
		methods: {
			filterByCategory(category){
				this.$emit('filtercat', category);
			},
			getAllProducts(){
				// let btn = document.querySelector('#all-icon');
				// btn.style.color="green";
				this.$emit('allcat');
			}
		}
	}
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