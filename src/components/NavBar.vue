<template>
  <nav class="navbar navbar-expand-lg bg-transparent">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/mjy_logo.png" style="width: 65px;height: 65px;" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav gap-5 m-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/product">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/factory">Factory</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/network">Our Network</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact Us</router-link>
          </li>
        </ul>
        <div class="d-flex gap-4 align-items-center">
          <i class="fa-solid fa-search primary-color"></i>
          <i class="fa-solid fa-bell primary-color"></i>
          <i class="fa-solid fa-user primary-color"></i>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>