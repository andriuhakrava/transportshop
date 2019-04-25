<template>
	<div>
		<nav>
			<ul class="nav-menu">
				<router-link tag="li" exact to="/" active-class="nav-menu-activelink">TransportShop</router-link>
				<router-link tag="li" to="/about" active-class="nav-menu-activelink">About</router-link>
				<router-link tag="li" to="/contacts" active-class="nav-menu-activelink">Contacts</router-link>
				<router-link tag="li" to="/admin" class="right-menu" active-class="nav-menu-activelink">
					<font-awesome-icon icon="user-tie" class="sign-icon" />Admin
				</router-link>
				<router-link tag="li" to="/register" active-class="nav-menu-activelink">
					<font-awesome-icon icon="user-plus" class="sign-icon" />Register
				</router-link>
				<router-link tag="li" to="/login" active-class="nav-menu-activelink">
					<font-awesome-icon icon="sign-in-alt" class="sign-icon" />Sign In
				</router-link>
				<li @click="onSignOut">
					<font-awesome-icon icon="door-open" class="sign-icon" />Sign Out
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
	export default {
		methods: {
			onSignOut(){
				this.$store.dispatch('signOut');
			}
		}
	}
</script>

<style scoped>
	.nav-menu {
		display: flex;
		background: #eeddcc;
		padding: 0 18px;
	}
	.nav-menu li {
		/*display: inline-block;*/
		padding: 8px 12px;
		font-size: 20px;
		cursor: pointer;
	}
	.nav-menu-activelink {
		background: orange;
	}
	.right-menu {
		margin-left: auto;
	}
	.sign-icon {
		margin-right: 8px;
	}
</style>