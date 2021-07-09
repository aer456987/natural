<template>
  <HomeNavBar
    class="transition-duration_1"
    :class="classStyle.navbarClass"
    @open-offcanvas="openFavoritesOffcanvas"
  ></HomeNavBar>
  <Offcanvas ref="likeOffcanvas"></Offcanvas>

  <header class="position-relative">
    <span
      class="headerTitleStyle z-index-2
        text-center text-light text-shadow"
    >
      <p class="headerTitleStyle_text fade_animetion">
        有個聲音正在向你求救，<br>
        但你卻看不到它們。
      </p>

      <p class="headerTitleStyle_title fw-bold fade_animetion_slow">
        你，<br>
        聽見它們的聲音了嗎？
      </p>
    </span>
    <Arrow class="arrow_style z-index-2"></Arrow>
    <HerderSwiper></HerderSwiper>
  </header>

  <main id="main" class="bg-white overflow-hidden">
    <!-- 圖片 -->
    <div class="container py-5 py-lg-6">
      <h1
        class="textStyle_rwd_1 fw-bold text-center mb-1"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-delay="300"
        data-aos-duration="1500"
      >
        自然，不該被視作理所當然。
      </h1>
      <p
        class="text-center mb-4 mb-lg-5"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-delay="500"
        data-aos-duration="1500"
      >
        它們不會說話，卻默默承受著我們造成的業果。
      </p>
      <NaturalThreatCard
      ></NaturalThreatCard>
    </div>

    <!-- 介紹 -->
    <section class="text-center bg-gray-100 py-5 py-lg-6">
      <h2
        class="fw-bold mb-0 mb-md-2 px-2"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        這一秒，大自然的生命也在逐漸凋零
      </h2>
      <div class="row flex-column align-items-center pt-3">
        <span
          class="col-10 col-md-7 col-lg-5"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="500"
          data-aos-duration="1500"
        >
          <p>
            環境議題一直都是不斷被提起，卻又容易被忽視的問題，
            一般大眾如果沒有無刻意關注，很常會錯過這些環保活動。
          </p>
          <strong>而這正是 Natural 平台成立的目的。</strong>
          <p class="pt-2 pb-2">
            Natural 平台整合了各項環保活動、募款專案，另外也收錄了多家優良廠商推出的有機食品，
            讓民眾能夠快速一覽相關的環境保育資訊、有機商品，並透過 Natural 平台進行快速預約或購買。
          </p>
        </span>
        <div
          class="col-10 col-sm-4 col-lg-3 col-xl-3 col-xxl-2"
          data-aos="fade"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="1500"
          data-aos-duration="1500"
        >
          <router-link to="/products">
            <HomeButton buttom-text="來去看看有些什麼"></HomeButton>
          </router-link>
        </div>
      </div>
    </section>

    <!-- 數字 -->
    <section class="container pt-5 pb-2 pt-lg-6 pb-lg-4">
      <ul class="row justify-content-around list-unstyled">

        <template
          v-for="platform in platformData"
          :key="platform.id"
        >
          <li
            class="col-6 col-xl-3 px-0 text-center mb-2"
            data-aos="zoom-in-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1500"
          >
            <h3 class="fs-7 fw-bold">
              <CountTo
                :end-val="platform.num"
                :count-to-id="platform.id"
              ></CountTo>
              <span class="fs-4">/{{ platform.unit }}</span>
            </h3>
            <p class="m-0">{{ platform.text }}</p>
          </li>
        </template>
      </ul>
    </section>

    <!-- 商品分類 -->
    <section class="pt-2 pb-5 pb-lg-6">
      <ProductSwiper class="py-2"></ProductSwiper>
    </section>

    <!-- 資訊 -->
    <section class="container py-5 py-lg-6">
      <HomeMessages></HomeMessages>
    </section>

    <!-- 訂閱 -->
    <section class="px-2 py-5 text-center bg-gray-100">
      <p class="fs-4 mb-3 px-2">
        訂閱 Natural 平台，讓您絕不漏接任何一則最新資訊！
      </p>
      <div class="row justify-content-center">
        <div class="col-md-7 col-lg-6 col-xl-4">
          <Form
            ref="subscriptionForm"
            v-slot="{ errors }"
            class="px-3"
            @change="checkEmailValue"
          >
            <div class="input-group">
              <Field
                type="email"
                name="Email"
                placeholder="留下您的Email，讓我們主動通知您！"
                id="subscriptionEmail"
                class="form-control py-1 px-2"
                :class="{ 'is-invalid': errors['Email'] }"
                rules="email"
                v-model="subscriptionEmail"
              ></Field>
              <button
                type="button"
                class="btn btn_main py-1 px-4"
                :class="{ 'disabled' : btnStatus }"
                @click="goSubscription"
              >
                訂閱
              </button>
              <error-message
                name="Email"
                class="invalid-feedback mb-1"
              ></error-message>
            </div>
          </Form>
        </div>
      </div>
    </section>
  </main>

  <Footer
    :textColor="'text-secondary'"
    :bgColor="'bg-primary'"
    :moreMsg="true"
  ></Footer>
</template>

<style lang="sass">
@import '../assets/allStyle';
@import "../assets/custom/rwdStyle";
</style>

<script>
import { swalFn } from '@/methods/swal';
import HomeNavBar from '@/components/navbar/HomeNavBar.vue';
import Offcanvas from '@/components/offcanvas/FavoritesOffcanvas.vue';
import Footer from '@/components/Footer.vue';
import HerderSwiper from '@/components/swiper/HomeHerderSwiper.vue';
import ProductSwiper from '@/components/swiper/HomeProductSwiper.vue';
import NaturalThreatCard from '@/components/home/HomeNaturalThreatCard.vue';
import HomeMessages from '@/components/home/HomeMessages.vue';
import CountTo from '@/components/count-to';
import HomeButton from '@/components/home/HomeButton.vue';
import Arrow from '@/components/home/Arrow.vue';

export default {
  name: 'Home',
  data() {
    return {
      platformData: [
        {
          id: 'year',
          num: 5,
          unit: '年',
          text: '平台成立',
        },
        {
          id: 'user',
          num: 20000,
          unit: '人',
          text: '每月使用者',
        },
        {
          id: 'activity',
          num: 4500,
          unit: '場',
          text: '公益活動',
        },
        {
          id: 'cooperative',
          num: 310,
          unit: '家',
          text: '合作廠商',
        },
      ],
      classStyle: {
        navbarClass: ['py-sm-1', 'py-md-3'],
      },
      homeFavoritsList: JSON.parse(localStorage.getItem('favoritData')) || [],
      subscriptionEmail: '',
      btnStatus: true,
    };
  },
  components: {
    HomeNavBar,
    Offcanvas,
    Footer,
    HerderSwiper,
    ProductSwiper,
    NaturalThreatCard,
    HomeMessages,
    CountTo,
    HomeButton,
    Arrow,
  },
  methods: {
    changeNavbarStyle() { // 滾動追蹤
      const windowY = window.scrollY;
      const main = document.querySelector('#main');
      // console.log(windowY, 'main:', main.offsetTop);

      if (windowY > main.offsetTop - 120) {
        this.classStyle.navbarClass = ['bg-primary', 'py-1'];
      } else {
        this.classStyle.navbarClass = ['py-sm-1', 'py-md-3'];
      }
    },
    openFavoritesOffcanvas() { // 打開最愛收藏側藍
      this.$refs.likeOffcanvas.openOffcanvas(this.homeFavoritsList);
    },
    checkEmailValue() { // 確認訂閱輸入欄是否為空
      if (this.subscriptionEmail === '') {
        this.btnStatus = true;
      } else {
        this.btnStatus = false;
      }
    },
    goSubscription() {
      this.subscriptionEmail = '';
      this.btnStatus = true;
      this.resetForm();
      swalFn('訂閱成功', 'success');
    },
    resetForm() { // 重製表單驗證
      this.$refs.subscriptionForm.resetForm();
    },
  },
  mounted() {
    window.addEventListener('scroll', this.changeNavbarStyle);
  },
  unmounted() { // 離開頁面後移除監聽事件
    window.removeEventListener('scroll', this.changeNavbarStyle);
  },
};
</script>
