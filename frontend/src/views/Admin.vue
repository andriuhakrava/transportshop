<template>
	<div class="page-wrapper">
		<h2 class="text-center user-header">Hello, admin! Welcome to your personal cabinet!</h2>
		<div class="admin-card">
			<div class="admin-avatar">
				<font-awesome-icon icon="user-tie" size="6x" />
			</div>
			<div class="admin-controls">
				<div class="admin-controls-item">
					<router-link to="/admin/addcategory">
						<button>
							<font-awesome-icon icon="plus-square" size="2x" style="color: #28a745" />
						</button>
					</router-link>
					<span class="admin-controls-item-header">Add New Category</span>
				</div>
				<div class="admin-controls-item">
					<router-link to="/admin/addproduct">
						<button>
							<font-awesome-icon icon="plus-circle" size="2x" style="color: #ffc107" />
						</button>
					</router-link>
					<span class="admin-controls-item-header">Add New Product</span>
				</div>
			</div>
		</div>
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	
</script>

<style scoped>
	/*h2 {
		margin-bottom: 38px;
	}*/
	.admin-card {
		display: flex;
		margin: 0 auto 48px;
		max-width: 600px;
	}
	.admin-avatar {
		margin-right: 22px;
	}
	.admin-controls {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-around;
	}
	.admin-controls-item {
		display: flex;
		align-items: center;
	}
	.admin-controls-item-header {
		padding-left: 12px;
	}
	button {
		border: none;
		padding: 0;
		width: 32px;
		height: 32px;
		background: #fff;
		outline: none;
	}
	@media screen and (max-width: 450px){
		.page-wrapper {
			padding: 0 15px;
		}
	}
	/*.slide-enter-active {
    animation: fade-in 300ms ease-out forwards;
  }
  .slide-leave-active {
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
  }*/
</style>