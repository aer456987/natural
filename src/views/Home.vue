<template>
  <HomeNavBar
    class="transition-duration-3"
    :class="classStyle.navbarClass"
    @open-offcanvas="openFavoritesOffcanvas" />
  <FavoritesOffcanvas ref="likeOffcanvas" />

  <header class="position-relative user-select-none">
    <div class="container-fluid">
      <div
        class="position-absolute top-50 start-50 translate-middle
          transition-duration-3
          w-100
          text-center text-light text-shadow
          z-index-2"
      >
        <p class="header__banner__text custom-fade-animetion">
          有個聲音正在向你求救，<br>
          但你卻看不到它們。
        </p>

        <h3 class="header__banner__title fw-bold custom-fade-animetion-slow">
          你，<br>
          聽見它們的聲音了嗎？
        </h3>
      </div>
      <Arrow class="arrow z-index-2" />

    </div>
    <HomeHerderSwiper />
    <HomeHerderSwiperMobile />
  </header>

  <main id="main" class="bg-white overflow-hidden user-select-none">
    <section class="container py-5 py-lg-6">
      <h2
        class="custom-style-text-1 fw-bold text-center mb-1"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-delay="200"
        data-aos-duration="700"
        data-aos-easing="ease-out"
      >
        自然，不該被視作理所當然。
      </h2>
      <p
        class="text-center mb-4 mb-lg-5"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-delay="400"
        data-aos-duration="700"
        data-aos-easing="ease-out"
      >
        它們不會說話，卻默默承受著我們造成的業果。
      </p>
      <HomeNaturalThreatCard />
    </section>

    <section class="text-center bg-gray-100 py-5 py-lg-6">
      <h2
        class="custom-style-text-1 fw-bold mb-0 mb-md-2 px-2"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-delay="100"
        data-aos-duration="700"
        data-aos-easing="ease-out"
      >
        這一秒，大自然的生命也在逐漸凋零
      </h2>
      <div class="row flex-column align-items-center pt-3">
        <div class="col-10 col-md-7 col-lg-5">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="200"
            data-aos-duration="700"
            data-aos-easing="ease-out"
          >
            環境議題一直都是不斷被提起，卻又容易被忽視的問題，
            一般大眾如果沒有無刻意關注，很常會錯過這些環保活動。
          </p>
          <p
            class="m-0"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="300"
            data-aos-duration="700"
            data-aos-easing="ease-out"
          >
            <strong>
              而這正是 Natural 環保資訊整合平台成立的目的。
            </strong>
          </p>
          <p
            class="pt-2 pb-2"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="400"
            data-aos-duration="700"
            data-aos-easing="ease-out"
          >
            Natural 環保資訊整合平台整合了各項環保活動、募款專案，另外也收錄了多家優良廠商推出的有機食品，
            讓民眾能夠快速一覽相關的環境保育資訊、有機商品，並透過 Natural 環保資訊整合平台進行快速預約或購買。
          </p>
        </div>
        <div
          class="col-10 col-sm-4 col-lg-3 col-xl-3 col-xxl-2"
          data-aos="fade"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <HomeButton
            buttom-text="來去看看有些什麼"
            link-path="/products" />
        </div>
      </div>
    </section>

    <section class="container pt-5 pt-lg-6  pb-2 pb-lg-4">
      <ul class="row justify-content-around list-unstyled">
        <li
          v-for="platform in platformData"
          :key="platform.id"
          class="col-6 col-xl-3 px-0 text-center mb-2"
          data-aos="zoom-in-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="700"
        >
          <h3 class="fs-7 fw-bold">
            <CountTo
              :duration="6000"
              :end-val="platform.num"
              :count-to-id="platform.id"
              class="fs-7"/>
            <span class="fs-4">/{{ platform.unit }}</span>
          </h3>
          <p class="m-0">
            {{ platform.text }}
          </p>
        </li>
      </ul>
    </section>

    <section class="pt-2 pb-5 pb-lg-6">
      <HomeProductSwiper class="py-2" />
    </section>

    <section class="container py-5 py-lg-6">
      <HomeMessages />
    </section>

    <section class="px-2 py-5 text-center bg-gray-100">
      <h4 class="fs-4 mb-3 px-2">
        訂閱 Natural 環保資訊整合平台，讓您絕不漏接任何一則最新資訊！
      </h4>
      <div class="row justify-content-center">
        <div class="col-md-7 col-lg-6 col-xl-4">
          <Form
            ref="subscriptionForm"
            v-slot="{ errors }"
            class="px-3"
            @submit="goSubscription"
          >
            <div
              class="input-group"
              @change="checkEmailValue"
            >
              <Field
                type="email"
                name="Email"
                placeholder="留下您的Email，讓我們主動通知您！"
                id="subscriptionEmail"
                class="form-control py-1 px-2"
                :class="{ 'is-invalid': errors['Email'] }"
                rules="email"
                v-model="subscriptionEmail" />
              <button
                type="submit"
                class="btn custom-btn-main py-1 px-4"
                :class="{ 'disabled' : btnStatus }"
              >
                訂閱
              </button>
              <ErrorMessage
                name="Email"
                class="invalid-feedback mb-1" />
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
    @back-top="backTop" />

  <GoToTopBtn
    :is-show="false"
    :bg-Color="'bg-primary'"
    @back-top-btn="backTop" />
</template>

<script>
import { swalFn } from '@/methods/swal';
import { CountTo } from 'vue3-count-to';
import HomeNavBar from '@/components/navbar/HomeNavBar.vue';
import FavoritesOffcanvas from '@/components/offcanvas/FavoritesOffcanvas.vue';
import Footer from '@/components/Footer.vue';
import HomeHerderSwiper from '@/components/swiper/HomeHerderSwiper.vue';
import HomeHerderSwiperMobile from '@/components/swiper/HomeHerderSwiperMobile.vue';
import HomeProductSwiper from '@/components/swiper/HomeProductSwiper.vue';
import HomeNaturalThreatCard from '@/components/home/HomeNaturalThreatCard.vue';
import HomeMessages from '@/components/home/HomeMessages.vue';
import HomeButton from '@/components/home/HomeButton.vue';
import Arrow from '@/components/home/Arrow.vue';
import GoToTopBtn from '@/components/GoToTopBtn.vue';

export default {
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
      homeFavoritesList: JSON.parse(localStorage.getItem('favoriteData')) || [],
      subscriptionEmail: '',
      btnStatus: true,
    };
  },
  components: {
    HomeNavBar,
    FavoritesOffcanvas,
    Footer,
    HomeHerderSwiper,
    HomeProductSwiper,
    HomeHerderSwiperMobile,
    HomeNaturalThreatCard,
    HomeMessages,
    CountTo,
    HomeButton,
    Arrow,
    GoToTopBtn,
  },
  methods: {
    changeNavbarStyle() {
      const windowY = window.scrollY;
      const main = document.querySelector('#main');

      if (windowY > main.offsetTop - 120) {
        this.classStyle.navbarClass = ['bg-primary', 'py-1'];
      } else {
        this.classStyle.navbarClass = ['py-sm-1', 'py-md-3'];
      }
    },
    openFavoritesOffcanvas() {
      this.$refs.likeOffcanvas.openOffcanvas(this.homeFavoritesList);
    },
    checkEmailValue() {
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
      swalFn('訂閱成功', 'success', true, 'top-end');
    },
    resetForm() {
      this.$refs.subscriptionForm.resetForm();
    },
    backTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.changeNavbarStyle);
    this.backTop();
  },
  unmounted() {
    window.removeEventListener('scroll', this.changeNavbarStyle);
  },
};
</script>
