<template>
	<div>
		<h2 class="text-center">Add New Category</h2>
		<p class="add-description">You could add one from two categories that are still to be added (bicycle or helicopter)</p>
		<form @submit.prevent="onAddCategory" class="admin-form">
			<div class="form-group">
        <label for="category-name">Category name: </label>
        <input type="text" id="category-name" class="form-control" required 
        				v-model.trim="name" :class="{ 'is-invalid': $v.name.$error }"
            		@blur="$v.name.$touch()" />
        <div class="invalid-feedback" v-if="!$v.name.required">
          Category field is required
        </div>
        <div class="invalid-feedback" v-if="!$v.name.alpha">
          Accepts only alphabet characters!
        </div>
      </div>
      <div class="form-group">
        <label for="category-short">Category shortname: </label>
        <input type="text" id="category-short" class="form-control" required 
        				v-model.trim="short" :class="{ 'is-invalid': $v.short.$error }"
            		@blur="$v.short.$touch()" />
        <div class="invalid-feedback" v-if="!$v.short.required">
          Category shortname field is required
        </div> 
        <div class="invalid-feedback" v-if="!$v.short.alpha">
          Accepts only alphabet characters!
        </div>
      </div>
      <button type="submit" class="btn btn-success" :disabled="$v.$invalid">
      	Add
      </button>
		</form>
	</div>
</template>

<script>
import { required, alpha } from 'vuelidate/lib/validators';
	export default {
		data(){
			return {
				name: '',
				short: ''
			}
		},
		computed: {
			catName(){
				let name = this.name.toLowerCase();
				return name.slice(0, 1).toUpperCase() + name.slice(1);
			},
			catShortName(){
				let short = this.short.toLowerCase();
				return short;
			}
		},
		validations: {
			name: {
				required,
				alpha
			},
			short: {
				required,
				alpha
			}
		},
		methods: {
			onAddCategory(){
				console.log('Result', this.catName, this.catShortName);
				this.$store.dispatch('addCategory', { 
					categori: {
						name: this.catName,
						short: this.catShortName
					} 
				})
			}
		}
	}
</script>

<style scoped>
	h2 {
		margin-bottom: 33px;
	}
	.add-description {
		font-size: 19px;
		font-style: italic;
		text-align: center;
		margin-bottom: 26px;
	}
</style>
