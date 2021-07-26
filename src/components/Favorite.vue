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
  data() {
    return {
      isFavorite: false,
      favoritesList: [],
    };
  },
  watch: {
    idData() { // 資料狀態改變後，在確認一次最愛清單
      this.isFavorite = this.checkFavorStatus();
    },
    favoritesList() {
      this.isFavorite = this.checkFavorStatus();
    },
  },
  methods: {
    saveFavorite(item) { // 存入最愛
      const data = JSON.stringify(item);
      localStorage.setItem('favoriteData', data);
    },
    getFavorites() { // 取得最愛清單
      this.favoritesList = JSON.parse(localStorage.getItem('favoriteData')) || [];
    },
    updateFavoritesNum(num) { // 更新最愛數量
      bus.emit('favorites-number', num.length);
    },
    addFavoriteItem() { // 加入最愛
      this.getFavorites();
      const favorStatus = this.checkFavorStatus();

      // 在列表裡就刪除，沒有就增加
      if (favorStatus) {
        this.favoritesList.splice(this.favoritesList.indexOf(this.idData), 1);
        this.saveFavorite(this.favoritesList);
        this.updateFavoritesNum(this.favoritesList);
        bus.emit('favorites-list', JSON.parse(localStorage.getItem('favoriteData')));
        this.isFavorite = favorStatus;
      } else {
        this.favoritesList.push(this.idData);
        this.saveFavorite(this.favoritesList);
        this.updateFavoritesNum(this.favoritesList);
        this.isFavorite = favorStatus;
      }
    },
    checkFavorStatus() { // 確認最愛按鈕狀態
      return this.favoritesList.includes(this.idData);
    },
  },
  mounted() {
    this.getFavorites();
    this.isFavorite = this.checkFavorStatus();

    bus.on('favorites-btn-status', () => this.getFavorites());
  },
};
</script>
