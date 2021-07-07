<template>
  <!-- 按鈕-我的最愛 -->
  <input
    type="checkbox"
    :id="idData.id"
    class="btn-check"
    autocomplete="off"
    :checked="isFavorite"
  >
  <label
    :for="idData.id"
    class="favorite_icon"
    @click="$emit('addFavoriteFn', idData.id)"
  >
    <i class="bi bi-heart-fill fs-4"></i>
  </label>
</template>

<script>
export default {
  name: 'Favorite',
  props: ['idData'],
  emits: ['addFavoriteFn'],
  data() {
    return {
      isFavorite: false,
      favoritsList: JSON.parse(localStorage.getItem('favoritData')) || [],
    };
  },
  watch: {
    idData() { // 資料狀態改變後，在確認一次最愛清單
      console.log('資料改變後的最愛', this.idData.id, this.favoritsList);
      console.log(this.favoritsList.includes(this.idData.id));
      this.isFavorite = this.favoritsList.includes(this.idData.id);
    },
  },
  methods: {
    saveFavorit(item) { // 存入最愛
      const data = JSON.stringify(item);
      localStorage.setItem('favoritData', data);
    },
  },
  mounted() {
    console.log('渲染時後的最愛', this.idData.id, this.favoritsList);
    console.log(this.favoritsList.includes(this.idData.id));
    this.isFavorite = this.favoritsList.includes(this.idData.id);
  },
};
</script>
