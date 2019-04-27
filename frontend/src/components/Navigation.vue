<template>
  <div>
    <nav>
      <ul class="nav-menu">
        <div class="pages-menu">
          <router-link tag="li" exact to="/" active-class="nav-menu-activelink"> TransportShop
          </router-link>
          <router-link tag="li" to="/about" active-class="nav-menu-activelink">
          About
          </router-link>
          <router-link tag="li" to="/contacts" active-class="nav-menu-activelink"> Contacts
          </router-link>
        </div>
        <div class="user-menu">
          <router-link  tag="li" to="/admin" active-class="nav-menu-activelink">
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
        </div>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    onSignOut() {
      this.$store.dispatch('signOut');
    },
  },
};
</script>

<style scoped>
  .nav-menu {
    display: flex;
    background: #eeddcc;
    padding: 0 18px;
  }
  .nav-menu li {
    padding: 12px;
    font-size: 20px;
    cursor: pointer;
    user-select: none;
  }
  .nav-menu-activelink {
    background: orange;
  }
  .pages-menu li, .user-menu li {
    display: inline-block;
  }
  .user-menu {
    margin-left: auto;
  }
  .sign-icon {
    margin-right: 8px;
  }
  @media screen and (max-width: 1060px){
    .nav-menu {
      flex-direction: column-reverse;
      padding: 12px 0;
    }
    .pages-menu {
      display: block;
      margin: 0 auto;
    }
    .user-menu {
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto 10px;
    }
  }
  @media screen and (max-width: 550px){
    .nav-menu li {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 450px){
    .nav-menu li {
      font-size: 14px;
    }
    .user-menu {
      justify-content: center;
    }
  }
</style>
