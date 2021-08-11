<template>
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
      class="favorite-icon"
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
      class="favorite-icon"
      @click="addFavoriteItem"
    >
      <i class="bi bi-heart-fill fs-4"></i>
    </label>
  </template>
</template>

<script>
import bus from '@/methods/bus';

export default {
  props: ['idData'],
  data() {
    return {
      isFavorite: false,
      favoritesList: [],
    };
  },
  watch: {
    idData() {
      this.isFavorite = this.checkFavorStatus();
    },
    favoritesList() {
      this.isFavorite = this.checkFavorStatus();
    },
  },
  methods: {
    saveFavorite(item) {
      const data = JSON.stringify(item);
      localStorage.setItem('favoriteData', data);
    },
    getFavorites() {
      this.favoritesList = JSON.parse(localStorage.getItem('favoriteData')) || [];
    },
    updateFavoritesNum(num) {
      bus.emit('favorites-number', num.length);
    },
    addFavoriteItem() {
      this.getFavorites();
      const favorStatus = this.checkFavorStatus();

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
    checkFavorStatus() {
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
