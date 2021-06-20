<template>
  <!-- {{tempProducts}} -->
  <li
    class="col-sm-6 col-lg-4 col-xl-3 my-3"
    v-for="product in tempProducts"
    :key="product.id"
  >
    <div class="card shadow-sm">
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
      <div class="card-body">
        <!-- <p class="card-text m-0 mb-3">{{ product.description }}</p> -->

        <!-- <p class="text-end fw-bold m-0">
          NT ${{ product.price }}
        </p> -->
      </div>
      <div
        class="
          card-footer
          bg-white
          border-0
          d-flex
          justify-content-between
          px-4
          pt-0
          pb-4
        "
      >
        <font-awesome-icon icon="heart" class="btn_red" />
        <font-awesome-icon
          icon="cart-plus"
          class="btn_green"
          @click="addCart(product.id)"
        />
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
