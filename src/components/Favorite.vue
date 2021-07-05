<template>
  <input
    type="checkbox"
    :id="idData.id"
    class="btn-check"
    autocomplete="off"
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
  methods: {
    saveFavorit(item) {
      const data = JSON.stringify(item);
      localStorage.setItem('favoritData', data);
    },
    getFavorits() {
      return JSON.parse(localStorage.getItem('favoritData'));
    },
  },
};
</script>
