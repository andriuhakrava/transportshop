<template>
	<div>
		<h2 class="text-center">
			<font-awesome-icon icon="walking" size="lg" />
			Let's move to your personal cabinet!
		</h2>
		<form @submit.prevent="onSignIn" class="admin-form">
			<div class="form-group">
        <label for="email">Email: </label>
        <input type="email" id="email" class="form-control" required
            				v-model="email" :class="{ 'is-invalid': $v.email.$error }"
            				@blur="$v.email.$touch()" />
        <div class="invalid-feedback" v-if="!$v.email.required">
          Email field is required
        </div>
        <div class="invalid-feedback" v-if="!$v.email.email">
          This field should be an email
        </div>
      </div>
			<div class="form-group">
        <label for="password">Password: </label>
        <input type="password" id="password" class="form-control" required
        				v-model="password" :class="{ 'is-invalid': $v.password.$error }"
        				@blur="$v.password.$touch()" />
        <div class="invalid-feedback" v-if="!$v.password.required">
          Password field is required
        </div>
        <div class="invalid-feedback" v-if="!$v.password.minLength">
          Min Length of password is {{ $v.password.$params.minLength.min }}. 
          Now it is {{ password.length }}.
        </div>
      </div>
			<!-- <div class="form-group">
        <label for="confirm-password">Confirm password: </label>
        <input type="password" id="confirm-password" class="form-control" required
        						v-model="confirm" :class="{ 'is-invalid': $v.confirm.$error }" @blur="$v.confirm.$touch()" />
        <div class="invalid-feedback" v-if="!$v.confirm.required">
          ConfirmPassword field is required
        </div>
        <div class="invalid-feedback" v-if="!$v.confirm.sameAs">
          Password should match!
        </div>
      </div> -->
			<button class="btn btn-success" type="submit" :disabled="$v.$invalid">
				Sign In
			</button>
		</form>
	</div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators';

	export default {
		data(){
			return {
				email: '',
				password: '',
				// confirm: ''
			}
		},
		methods: {
			onSignIn(){
				console.log('GOOD!');
				this.$store.dispatch('signIn', { 
					user: {
						email: this.email, 
						password: this.password, 
						// confirm: this.confirm
					}
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
        minLength: minLength(6)
      },
      // confirm: {
      //   required,
      //   sameAs: sameAs((vue) => {
      //     return vue.password
      //   })
      // }
		}
	}
</script>