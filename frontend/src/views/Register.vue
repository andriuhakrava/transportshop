<template>
  <div class="page-wrapper">
    <h2 class="text-center user-header">
      <font-awesome-icon icon="user-plus" size="lg" />
      Register here to create a personal cabinet!
    </h2>
    <form @submit.prevent="onSignIn" class="admin-form">
      <div class="form-group">
        <label for="email">Email: </label>
        <input  type="email"
                id="email"
                class="form-control"
                v-model="email"
                :class="{ 'is-invalid': $v.email.$error }"
                @blur="$v.email.$touch()"
                required />
        <div class="invalid-feedback" v-if="!$v.email.required">
          Email field is required
        </div>
        <div class="invalid-feedback" v-if="!$v.email.email">
          This field should be an email
        </div>
      </div>
      <div class="form-group">
        <label for="password">Password: </label>
        <input  type="password"
                id="password"
                class="form-control"
                v-model="password"
                :class="{ 'is-invalid': $v.password.$error }"
                @blur="$v.password.$touch()"
                required />
        <div class="invalid-feedback" v-if="!$v.password.required">
          Password field is required
        </div>
        <div class="invalid-feedback" v-if="!$v.password.minLength">
          Min Length of password is {{ $v.password.$params.minLength.min }}.
          Now it is {{ password.length }}.
        </div>
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm password: </label>
        <input  type="password"
                id="confirm-password"
                class="form-control"
                v-model="confirm"
                :class="{ 'is-invalid': $v.confirm.$error }"
                @blur="$v.confirm.$touch()"
                required />
        <div class="invalid-feedback" v-if="!$v.confirm.required">
          ConfirmPassword field is required
        </div>
        <div class="invalid-feedback" v-if="!$v.confirm.sameAs">
          Password should match!
        </div>
      </div>
      <button class="btn btn-success" type="submit" :disabled="$v.$invalid">
        Register
      </button>
    </form>
  </div>
</template>

<script>
import {
  required, email, minLength, sameAs,
} from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      email: '',
      password: '',
      confirm: '',
    };
  },
  methods: {
    onSignIn() {
      this.$store.dispatch('registerAdmin', {
        user: {
          email: this.email,
          password: this.password,
          confirm: this.confirm,
        },
      });
    },
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
    confirm: {
      required,
      sameAs: sameAs(vue => vue.password),
    },
  },
};
</script>
