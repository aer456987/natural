<template>
  <!-- 按鈕-我的最愛 -->
  <input
    type="checkbox"
    :id="idData"
    class="btn-check"
    autocomplete="off"
    :checked="isFavorite"
  >
  <label
    :for="idData"
    class="favorite_icon"
    @click="addFavoriteItem"
  >
    <i class="bi bi-heart-fill fs-4"></i>
  </label>
</template>

<script>
import bus from '@/methods/bus';

export default {
  name: 'Favorite',
  props: ['idData'],
  // emits: ['favoriteFn'],
  data() {
    return {
      isFavorite: false,
      favoritsList: JSON.parse(localStorage.getItem('favoritData')) || [],
      newfavoritsList: [],
    };
  },
  watch: {
    idData() { // 資料狀態改變後，在確認一次最愛清單
      this.isFavorite = this.favoritsList.includes(this.idData);
    },
  },
  methods: {
    saveFavorit(item) { // 存入最愛
      const data = JSON.stringify(item);
      localStorage.setItem('favoritData', data);
    },
    updateFavoritsNum() { // 更新最愛數量
      const newNum = JSON.parse(localStorage.getItem('favoritData'));
      bus.emit('favorits-number', newNum.length);
    },
    addFavoriteItem() { // 加入最愛
      this.favoritsList = JSON.parse(localStorage.getItem('favoritData'));
      if (this.favoritsList.includes(this.idData)) {
        this.favoritsList.splice(this.favoritsList.indexOf(this.idData), 1);
        this.saveFavorit(this.favoritsList);
        this.updateFavoritsNum();
        bus.emit('favorits-list', JSON.parse(localStorage.getItem('favoritData')));
      } else {
        this.favoritsList.push(this.idData);
        this.saveFavorit(this.favoritsList);
        this.updateFavoritsNum();
      }
    },
  },
  mounted() {
    this.isFavorite = this.favoritsList.includes(this.idData);
  },
};
</script>
