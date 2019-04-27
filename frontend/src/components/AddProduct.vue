<template>
  <div>
    <h2 class="text-center user-header">Add New Product</h2>
    <form @submit.prevent="onAddProduct" class="admin-form">
      <div class="form-group">
        <label for="name">Product name: </label>
        <input  type="text"
                id="name"
                class="form-control"
                :class="{ 'is-invalid': $v.newProduct.name.$error }"
                @blur="$v.newProduct.name.$touch()"
                required
                v-model.trim="newProduct.name" />
        <div class="invalid-feedback" v-if="!$v.newProduct.name.required">
          Name field is required
        </div>
      </div>
      <div class="form-group">
        <label for="descriptions">Product descriptions: </label>
        <textarea type="text"
                  id="descriptions"
                  class="form-control"
                  rows="5"
                  v-model.trim="newProduct.descriptions">
        </textarea>
      </div>
      <div class="form-group">
        <label for="images">Images: </label>
        <input  type="text"
                class="form-control"
                id="images"
                v-model="newProduct.selectedImage" />
      </div>
      <div class="form-group">
        <label>Category (only from existing ones): </label>
        <select id="category"
                class="form-control"
                :class="{ 'is-invalid': $v.newProduct.category.$error }"
                @blur="$v.newProduct.category.$touch()"
                v-model="newProduct.category" >
          <option v-for="cat in categories" :value="cat.short" :key="cat.id">
            {{ cat.name }}
          </option>
        </select>
        <div class="invalid-feedback" v-if="!$v.newProduct.category.required">
          Category field is required
        </div>
      </div>
      <div class="form-group">
        <label for="brand">Brand: </label>
        <input  type="text"
                id="brand"
                class="form-control"
                :class="{ 'is-invalid': $v.newProduct.brand.$error }"
                @blur="$v.newProduct.brand.$touch()"
                required
                v-model.trim="newProduct.brand" />
        <div class="invalid-feedback" v-if="!$v.newProduct.brand.required">
          Brand field is required
        </div>
      </div>
      <div class="form-group">
        <label for="model">Model: </label>
        <input  type="text"
                id="model"
                class="form-control"
                :class="{ 'is-invalid': $v.newProduct.model.$error }"
                @blur="$v.newProduct.model.$touch()"
                required
                v-model.trim="newProduct.model" />
        <div class="invalid-feedback" v-if="!$v.newProduct.model.required">
          Model field is required
        </div>
      </div>
      <div class="form-group">
        <label for="engine">Engine: </label>
        <input  type="text"
                id="engine"
                class="form-control"
                v-model.trim="newProduct.specifications.engine" />
      </div>
      <div class="form-group">
        <label for="price">Price: </label>
        <input  type="text"
                id="price"
                class="form-control"
                :class="{ 'is-invalid': $v.newProduct.price.$error }"
                @blur="$v.newProduct.price.$touch()"
                required
                v-model.trim="newProduct.price" />
        <div class="invalid-feedback" v-if="!$v.newProduct.price.required">
          Price field is required
        </div>
        <div class="invalid-feedback" v-if="!$v.newProduct.price.numeric">
          Used only numeric values without space, dot or comma!
        </div>
      </div>
      <div class="form-group">
        <label for="currency">Currency: </label>
        <input  type="text"
                id="currency"
                class="form-control"
                :class="{ 'is-invalid': $v.newProduct.currency.$error }"
                @blur="$v.newProduct.currency.$touch()"
                required
                v-model.trim="newProduct.currency" />
        <div class="invalid-feedback" v-if="!$v.newProduct.currency.required">
          Currency field is required
        </div>
      </div>
      <button type="submit" class="btn btn-warning" :disabled="$v.$invalid">
        Add
      </button>
    </form>
  </div>
</template>

<script>
import { required, numeric } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      newProduct: {
        name: '',
        descriptions: '',
        images: [],
        selectedImage: '',
        category: '',
        brand: '',
        model: '',
        specifications: {
          engine: '',
        },
        price: '',
        currency: '',
      },
    };
  },
  validations: {
    newProduct: {
      name: {
        required,
      },
      category: {
        required,
      },
      brand: {
        required,
      },
      model: {
        required,
      },
      price: {
        required,
        numeric,
      },
      currency: {
        required,
      },
    },
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
  },
  created() {
    this.$store.dispatch('getCategories');
  },
  methods: {
    onAddProduct() {
      this.newProduct.images.push(this.newProduct.selectedImage);
      this.$store.dispatch('addProduct', {
        product: {
          name: this.newProduct.name,
          descriptions: this.newProduct.descriptions,
          images: this.newProduct.images,
          category: this.newProduct.category,
          brand: this.newProduct.brand,
          model: this.newProduct.model,
          specifications: this.newProduct.specifications,
          price: parseInt(this.newProduct.price, 10),
          currency: this.newProduct.currency,
        },
      });
      this.clearAddForm();
    },
    clearAddForm() {
      this.newProduct.name = '';
      this.newProduct.descriptions = '';
      this.newProduct.selectedImage = '';
      this.newProduct.category = '';
      this.newProduct.brand = '';
      this.newProduct.model = '';
      this.newProduct.specifications.engine = '';
      this.newProduct.price = '';
      this.newProduct.currency = '';
    },
  },
};
</script>

<style scoped>
  @media screen and (max-width: 450px){
    .page-wrapper {
      padding: 0 15px;
    }
  }
</style>
