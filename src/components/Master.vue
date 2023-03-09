<template>
<div>
  <NavBar></NavBar>
  <slot>

  </slot>
  <Footer></Footer>

</div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
export default {
  name: "Master",
  components: {Footer, NavBar}
}
</script>

<style scoped>

</style>