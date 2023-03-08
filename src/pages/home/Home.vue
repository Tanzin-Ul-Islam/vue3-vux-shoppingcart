<template>
  <div class="container">
    <div class="row mt-5">
      <Card v-for="(data, index) in productList" :key="index" :item="data"/>
    </div>
  </div>
</template>

<script src="./home.js"></script>
