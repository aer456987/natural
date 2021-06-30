<template>
  <!-- 導覽列 -->
  <NavBar></NavBar>

  <router-view></router-view>

  <footer class="p-3 bg-primary text-center">
    <small class="container text-secondary mx-auto my-0">
      Copyright © 2021 ToriHa | 個人作業使用，無商業行為
    </small>
  </footer>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'Front',
  data() {
    return {
    };
  },
  components: { NavBar },
  methods: {
  },
  mounted() {
  },
};
</script>
