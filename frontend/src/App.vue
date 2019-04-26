<template>
  <div>
    <Navigation />
    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
  export default {
    components: {
      Navigation
    },
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans', sans-serif;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  button {
    cursor: pointer;
  }
  h1, h2, h3 {
    margin: 0;
  }
  h2 {
    margin-bottom: 18px;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  .container {
    padding: 55px 0;
    margin: 0 auto;
    max-width: 992px;
  }
  .admin-form {
    margin: 0 auto;
    max-width: 600px;
  }
  .page-wrapper {
    padding: 0 55px;
  }
  .page-header {
    margin-bottom: 44px;
  }
  .user-header {
    margin-bottom: 33px;
  }
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
  @media screen and (max-width: 550px){
    .page-wrapper {
      padding: 0 40px;
    }
    .user-header {
      font-size: 28px;
    }
  }
  @media screen and (max-width: 450px){
    .user-header {
      font-size: 23px;
    }
  }
</style>
