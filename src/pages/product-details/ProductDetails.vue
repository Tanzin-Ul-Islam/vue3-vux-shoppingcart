<template>
  <div className="container mt-2">
    <div class="card mb-3 mt-3" style="max-width: 800px; margin: 0 auto">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            :src="productData.imgdata"
            class="img-fluid rounded-start"
            alt=""
            style="height: 18rem"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ productData.rname }}</h5>
            <p class="card-text" style="font-weight: 600">
              Resturant: {{ productData.address }}
            </p>
            <div className="row">
              <div className="col-sm-6">
                <p class="card-text" style="font-weight: 600">
                  Price: {{ productData.price }}
                </p>
              </div>
              <div className="col-sm-6">
                <p class="card-text" style="font-weight: 600">
                  Rating: {{ productData.rating }}/5
                </p>
              </div>
            </div>
            <br />
            <p class="card-text" style="font-weight: 600">
              OverView: {{ productData.somedata }}
            </p>
            <div class="wrapper">
              <button
                class="cart-btn btn--minus"
                type="button"
                name="button"
                @click="decreaseQuantity"
              >
                -
              </button>
              <input class="quantity" type="text" name="name" v-model="quantity" />
              <button
                class="cart-btn btn--plus"
                type="button"
                name="button"
                @click="increaseQuantity"
              >
                +
              </button>
            </div>
            <a
              href="javascript:void(0)"
              class="btn btn-outline-success mt-4"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              @click="handleAddtoCart"
              >Add to cart</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./product-details.js"></script>

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
