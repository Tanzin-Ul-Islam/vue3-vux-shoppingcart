<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="javascript:void(0)" @click="$router.push('/')">Vuex Cart</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="javascript:void(0)" @click="$router.push('/')">Home</a>
          </li>
        </ul>
        <div class="d-flex">
          <div class="cart-wrapper mt-1">
            <div class="cart-icon">
              <i class="fa fa-shopping-cart"></i>
              <span class="cart-count">{{ cartCounter }}</span>
            </div>
          </div>
          <button
            class="btn btn-outline-success"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
          >
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
<script src="./navbar.js"></script>
<style scoped>
.cart-wrapper {
  position: relative;
}

.cart-icon {
  position: relative;
  display: inline-block;
}

.cart-count {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: white;
  color: black;
  border-radius: 50%;
  padding: 5px;
  font-size: 12px;
  font-weight: 600;
}
</style>
