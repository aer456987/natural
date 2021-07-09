<template>
  <!-- 按鈕-我的最愛 -->
  <template v-if="isFavorite">
    <input
      type="checkbox"
      :id="idData"
      class="btn-check"
      autocomplete="off"
      checked
    >
    <label
      :for="idData"
      class="favorite_icon"
      @click="addFavoriteItem"
    >
      <i class="bi bi-heart-fill fs-4"></i>
    </label>
  </template>
  <template v-else>
    <input
      type="checkbox"
      :id="idData"
      class="btn-check"
      autocomplete="off"
    >
    <label
      :for="idData"
      class="favorite_icon"
      @click="addFavoriteItem"
    >
      <i class="bi bi-heart-fill fs-4"></i>
    </label>
  </template>
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
      favoritsList: [],
    };
  },
  watch: {
    idData() { // 資料狀態改變後，在確認一次最愛清單
      this.isFavorite = this.checkFavorStatus();
    },
    favoritsList() {
      this.isFavorite = this.checkFavorStatus();
    },
  },
  methods: {
    saveFavorit(item) { // 存入最愛
      const data = JSON.stringify(item);
      localStorage.setItem('favoritData', data);
    },
    getFavorites() { // 取得最愛清單
      this.favoritsList = JSON.parse(localStorage.getItem('favoritData')) || [];
    },
    updateFavoritsNum(num) { // 更新最愛數量
      bus.emit('favorits-number', num.length);
    },
    addFavoriteItem() { // 加入最愛
      this.getFavorites();
      const favorStatus = this.checkFavorStatus();

      // 在列表裡就刪除，沒有就增加
      if (favorStatus) {
        this.favoritsList.splice(this.favoritsList.indexOf(this.idData), 1);
        this.saveFavorit(this.favoritsList);
        this.updateFavoritsNum(this.favoritsList);
        bus.emit('favorits-list', JSON.parse(localStorage.getItem('favoritData')));
        this.isFavorite = favorStatus;
      } else {
        this.favoritsList.push(this.idData);
        this.saveFavorit(this.favoritsList);
        this.updateFavoritsNum(this.favoritsList);
        this.isFavorite = favorStatus;
      }
    },
    checkFavorStatus() { // 確認最愛按鈕狀態
      return this.favoritsList.includes(this.idData);
    },
  },
  mounted() {
    this.getFavorites();
    this.isFavorite = this.checkFavorStatus();

    bus.on('favorits-btn-status', () => this.getFavorites());
  },
};
</script>
