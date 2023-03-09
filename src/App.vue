<template>
  <router-view/>
</template>

<style lang="scss">
nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import  "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"
import "../src/assets/style.css"
import NavBar from "@/components/NavBar";
export default {
  components: {NavBar}
}
</script>