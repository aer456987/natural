<template>
  <MainNavbar />
  <router-view></router-view>
  <Footer
    :textColor="'text-secondary'"
    :bgColor="'bg-primary'"
    :moreMsg="true"
    @back-top="backTop" />

  <GoToTopBtn
    is-show="ture"
    :bg-Color="'bg-primary'"
    @back-top-btn="backTop" />
</template>

<script>
import MainNavbar from '@/components/navbar/MainNavbar.vue';
import Footer from '@/components/Footer.vue';
import GoToTopBtn from '@/components/GoToTopBtn.vue';

export default {
  components: { MainNavbar, Footer, GoToTopBtn },
  methods: {
    backTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>
