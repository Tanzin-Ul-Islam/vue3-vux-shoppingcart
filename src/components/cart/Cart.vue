<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">Cart</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div v-if="cartList.length > 0">
        <div
          class="card mb-3"
          style="max-width: 540px"
          v-for="(el, index) in cartList"
          :key="index"
        >
          <div class="row g-0">
            <div class="col-md-4" style="cursor: pointer">
              <img
                :src="el.data.imgdata"
                class="card-img-top"
                alt="{el.data.rname}"
                height="138"
                width="286"
                @click="$router.push('/product/' + el.data.rname)"
                data-bs-dismiss="offcanvas"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ el.data.rname }}</h5>
                <h6>Price: {{ el.data.price }}</h6>
                <div className="row">
                  <div className="col-sm-6">
                    <div class="wrapper">
                      <button class="cart-btn btn--minus" type="button" name="button" @click="decreaseQuantity(index)">
                        -
                      </button>
                      <input
                        class="quantity"
                        type="text"
                        name="name"
                        v-model="el.quantity"
                        disabled
                      />
                      <button class="cart-btn btn--plus" type="button" name="button" @click="increaseQuantity(index)">
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <a href="javascript:void(0)" class="btn btn-sm btn-outline-dark"
                      @click="removeItemFromCart(index)">Remove</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="alert alert-primary" role="alert" style="text-align: center">
        Cart is empty!
      </div>
    </div>
  </div>
</template>

<script src="./cart.js"></script>

<style scoped>
.wrapper {
  height: 30px;
  display: flex;
}
.quantity {
  -webkit-appearance: none;
  border: none;
  text-align: center;
  width: 30px;

  font-size: 16px;
  color: #43484d;
  font-weight: 300;
  border: 1px solid #e1e8ee;
}

.cart-btn {
  border: 1px solid #e1e8ee;
  width: 30px;
  background-color: #e1e8ee;
  /*   border-radius: 6px; */
  cursor: pointer;
}
button:focus,
input:focus {
  outline: 0;
}
</style>
