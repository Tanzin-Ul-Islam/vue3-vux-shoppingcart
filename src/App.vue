<template>
    <Navbar />
    <Cart />
    <router-view />
</template>

<script>
import Cart from "./components/cart/Cart.vue";
import Navbar from "./components/navbar/NavBar.vue";
export default {
  components: {
    Navbar,
    Cart,
  },
};
</script>
<style></style>
