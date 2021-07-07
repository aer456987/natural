<template>
  <!-- 我的最愛側欄ㄋ -->
  <div
    class="offcanvas offcanvas-end shadow-lg"
    data-bs-scroll="true"
    data-bs-backdrop="true"
    tabindex="-1"
    ref="offcanvas"
  >
    <div class="offcanvas-header">
      <h3 class="fs-5">
        最愛收藏
      </h3>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <ul class="list-unstyled px-1">
        <li class="row justify-content-between align-items-center
          mb-2 pb-2 border-bottom"
        >
          <span class="col-2 p-0">
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1624872039637.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bdpK7FIATrJpeNeHxkM52DN9pxMfHmC2nwUECqgtJoKYKfyf%2FyXmhgHCVpcYyTF9DxPTsvQokVSP58vkHOsxvD3aP37d%2FiXyKZDxlfJDH8dKH5aQbJuDcX1jkVJf9%2FxY0CClLMByX6pWhwZp%2FA7Hklne8m%2BOsNtmexJOe14tymtAWwpmvSTqq7rkmCva4A0FMmS0fuSGG5CasWVIzNxhyc9I7Pqi6Vk3kvPl0xjU2biNFmMfkpgSpkbTdnB4lvBvOn0v3r0kslHgm%2BDpdwqBvSIRRG%2F8bm5WyJsPf8h2v0tMwwQ9%2Bol%2BeB9QhWiNCp8rvszh56FF%2BzwegVN8wVYNXQ%3D%3D"
              alt="圖片"
              class="w-100"
            >
          </span>
          <span class="col-6 px-2">
            山林保育講座(台灣山林) <br>
            價格
          </span>
          <span class="col-2 p-0 text-center">
            <FavoriteIcon
              ref="favorit"
              class="p-1"
              :idData="product"
              @add-favorite-fn="addFavoriteItem"
            ></FavoriteIcon>
          </span>
          <span class="col-2">
            <span
              class="btn btn_outline_green fs-4"
            >
              <!-- @click="addCart(product.id)" -->
              <i class="bi bi-cart-plus-fill"></i>
            </span>
          </span>
        </li>

        <li class="row justify-content-between align-items-center
          mb-2 pb-2 border-bottom"
        >
          <span class="col-2 p-0">
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1624872039637.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bdpK7FIATrJpeNeHxkM52DN9pxMfHmC2nwUECqgtJoKYKfyf%2FyXmhgHCVpcYyTF9DxPTsvQokVSP58vkHOsxvD3aP37d%2FiXyKZDxlfJDH8dKH5aQbJuDcX1jkVJf9%2FxY0CClLMByX6pWhwZp%2FA7Hklne8m%2BOsNtmexJOe14tymtAWwpmvSTqq7rkmCva4A0FMmS0fuSGG5CasWVIzNxhyc9I7Pqi6Vk3kvPl0xjU2biNFmMfkpgSpkbTdnB4lvBvOn0v3r0kslHgm%2BDpdwqBvSIRRG%2F8bm5WyJsPf8h2v0tMwwQ9%2Bol%2BeB9QhWiNCp8rvszh56FF%2BzwegVN8wVYNXQ%3D%3D"
              alt="圖片"
              class="w-100"
            >
          </span>
          <span class="col-6 px-2">
            山林保育講座(台灣山林) <br>
            價格
          </span>
          <span class="col-2 p-0 text-center">
            <FavoriteIcon
              ref="favorit"
              class="p-1"
              :idData="product"
              @add-favorite-fn="addFavoriteItem"
            ></FavoriteIcon>
          </span>
          <span class="col-2">
            <span
              class="btn btn_outline_green fs-4"
            >
              <!-- @click="addCart(product.id)" -->
              <i class="bi bi-cart-plus-fill"></i>
            </span>
          </span>
        </li>
      </ul>
      <router-link
        to="/cart"
        class="nav-link btn btn_main"
      >
        按鈕
      </router-link>
    </div>
  </div>

</template>

<script>
import Offcanvas from 'bootstrap/js/dist/offcanvas';
import FavoriteIcon from '@/components/Favorite.vue';

export default {
  name: 'FavoritesOffcanvas.vue',
  data() {
    return {
      offcanvas: '',
      product: 'id',
      myFavoritslist: [],
    };
  },
  components: { FavoriteIcon },
  methods: {
    openOffcanvas() {
      this.offcanvas.show();
    },
    hideOffcanvas() {
      this.offcanvas.hide();
    },
    addFavoriteItem() {
      console.log('切換最愛收藏');
    },
  },
  mounted() {
    this.offcanvas = new Offcanvas(this.$refs.offcanvas);
    // console.log('側欄資訊', JSON.parse(localStorage.getItem('favoritData')));
  },
};
</script>
