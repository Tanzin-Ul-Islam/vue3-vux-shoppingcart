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
  created() {
    if (!localStorage.getItem("cartList")) {
      localStorage.setItem("cartList", null);
    }
  },
};
</script>
<style></style>
