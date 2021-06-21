<template>
  <li
    class="col-sm-6 col-lg-4 col-xl-3 my-2"
    v-for="product in tempProducts"
    :key="product.id"
  >
    <!-- {{ product }} -->
    <div class="card border-0 shadow-sm">
      <router-link
        :to="`/product/${product.id}`"
        class="card-img-top card_img_style"
      >
        <div class="more_msg">
          <font-awesome-icon icon="search-plus" />
        </div>
        <img class="img-fluid" :src="product.imageUrl" alt="'商品圖" />
        <h2 class="card-title z-9999 position-absolute fw-bold">{{ product.title }}</h2>
      </router-link>
      <!-- <p class="card-text m-0 mb-3">{{ product.description }}</p> -->

      <!-- <p class="text-end fw-bold m-0">
        NT ${{ product.price }}
      </p> -->
      <div
        class="
          card-body
          bg-white
          rounded-bottom
          d-flex justify-content-between align-items-center
          px-2
          py-3
        "
      >
        <h1 class="h4 fw-bold m-0 text-truncate">
          {{ product.title }} <br>
          <span class="h6 fst-italic">${{ product.price }}</span>
        </h1>
        <span>
          <!-- <span class="btn border">
            <i class="bi bi-heart-fill"></i>
          </span> -->
          <span class="btn btn_outline_green fs-4 ms-1"
            @click="addCart(product.id)">
            <i class="bi bi-cart-plus-fill"></i>
              <!-- btn_green -->
          </span>
        </span>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Card',
  props: ['tempProducts'],
  data() {
    return {
      data: {
        product_id: '',
        qty: 1,
      },
    };
  },
  methods: {
    addCart(id) {
      this.data.product_id = id;
      this.$emit('addCart', this.data);
    },
  },
};
</script>
