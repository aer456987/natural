<template>
  <MainNavbar></MainNavbar>
  <router-view></router-view>
  <Footer
    :textColor="'text-secondary'"
    :bgColor="'bg-primary'"
    :moreMsg="true"
  ></Footer>
</template>

<script>
import MainNavbar from '@/components/navbar/MainNavbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Front',
  components: { MainNavbar, Footer },
};
</script>
