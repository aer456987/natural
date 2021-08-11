<template>
  <HeaderBackgroundImg
    :header-title="headerData.title"
    :header-imgUrl="headerData.imgUrl" />
  <main class="container page-content user-select-none px-3 px-sm-1 px-md-4">
    <div class="py-4">
      <Breadcrumb :breadcrumb-data="breadcrumbData" />

      <section class="row py-3">
        <div class="col-12 col-lg-7">
          <ul class="row list-unstyled">
            <li
              v-for="(pageText, key) in pageTextContent"
              :key="`關於內文_${key}`"
              class="col-12 pe-2 py-3 text-break"
              data-aos="fade-up"
              data-aos-easing="ease-out-back"
              data-aos-anchor-placement="top-bottom"
              :data-aos-delay="`1${key+1}0`"
              data-aos-duration="700"
            >
              <h2 class="fw-bold pb-1">
                {{ pageText.title }}
              </h2>
              <p v-html="pageText.content">
              </p>
              <img
                :src="pageText.img"
                :alt="`${pageText.title}_圖片${key}`"
                class="d-block d-lg-none w-100 rounded-1"
              >
            </li>
          </ul>
        </div>

        <aside class="col-5 d-none d-lg-block">
          <ul class="row list-unstyled py-3">
            <li
              v-for="(asideImg, key) in pageTextContent"
              :key="`側欄圖片_${key}`"
              class="col-12 py-1"
              data-aos="fade-up"
              data-aos-easing="ease-out-back"
              data-aos-anchor-placement="top-bottom"
              :data-aos-delay="`1${key+2}0`"
              data-aos-duration="700"
            >
              <img
                :src="asideImg.img"
                :alt="asideImg.title"
                class="w-100 rounded-1"
              >
            </li>
          </ul>
        </aside>
      </section>

      <section
        class="row pt-5 pb-3 px-2 mt-2 mb-4 bg-white shadow-sm rounded-2"
        data-aos="fade-up"
        data-aos-easing="ease-out-back"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="200"
        data-aos-duration="700"
      >
        <div class="col-12 text-center mb-2">
          <h2 class="fw-bold">
            聯絡我們
          </h2>
          <ul class="d-flex justify-content-center fs-2 mb-1">
            <li class="px-1">
              <a
                href="#"
                @click.prevent="backTop"
              >
                <Font-awesome-icon
                  :icon="['fab', 'facebook-square']"
                  class="mx-1 text-blue-600 scale transition-duration-2"
                  title="facabook 粉絲團" />
              </a>
            </li>
            <li class="px-1">
              <a
                href="#"
                @click.prevent="backTop"
              >
                <Font-awesome-icon
                  :icon="['fab', 'instagram-square']"
                  class="mx-1 text-pink scale transition-duration-2"
                  title="Instagram" />
              </a>
            </li>
            <li class="px-1">
              <a
                href="#"
                @click.prevent="backTop"
              >
                <Font-awesome-icon
                  :icon="['fab', 'line']"
                  class="mx-1 text-green scale transition-duration-2"
                  title="@line 官方" />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <p class="m-0">
                住址：台北市信義區林口街38巷109號6樓
              </p>
            </li>
            <li>
              <p class="m-0">
                客服電話：
                <a
                  href="tel:+886-2-2308264"
                  class="custom-link-success"
                >
                  (02)2308264
                </a>
                /
                <a
                  href="tel:+886-2-2308264"
                  class="custom-link-success"
                >
                  (02)8650610
                </a>
              </p>
            </li>
            <li>
              <p class="m-0">
                客服信箱：
                <a
                  href="mailto:naturalConservation@gmail.com"
                  class="custom-link-success"
                >
                  naturalConservation@gmail.com
                </a>
              </p>
            </li>
            <li>
              <p>服務時間：09:00 ~ 13:00 / 15:00 ~ 19:00</p>
            </li>
          </ul>
        </div>
        <div class="col-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d451.8560236395452!2d121.5829368923491!3d25.0392255102093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab0a75bd22d7%3A0xf1b53b5cf37fc8da!2zMTEw5Y-w5YyX5biC5L-h576p5Y2A5p6X5Y-j6KGXMzjlt7cxMDnomZ8!5e0!3m2!1szh-TW!2stw!4v1625387151731!5m2!1szh-TW!2stw"
            allowfullscreen=""
            loading="lazy"
            class="height-xl border-0 w-100 h-100"
          ></iframe>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import HeaderBackgroundImg from '@/components/HeaderBackgroundImg.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';

export default {
  data() {
    return {
      headerData: {
        title: '關於我們',
        imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625381277465.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Qr1h3nGOQfMXPX6xtyHsiq9Q6u8FKLZ2YyqwO7RdiLAflXUKcKiE9xXz%2FY2ZTXYxURAfTC8mobCxm04%2BFL%2BTbE1Xwi0ZHW1n1X37w46ptwZwa9qV6ODquLd8%2Fizo2k12gJFotUph7vY79LO5vXFOzz1aA%2FcLSSuDikv%2B9RfJUAcMA0ShO%2FJ70d0sBSY7tWcgOfZOe8%2Fc0MHN9RhJ4ZFppqiVXOqiiR7r9tV4V0air8vsNxJyQMyM0sOHHEqTAyKf%2Fc55QlE6Yg%2Bs19VLInoE4yxJEWT0RNvRNNMRYaqSz4qsshVZK0r2k%2BDFNzSmmfxM%2FDmJ3gLaGUmVxURWvKEPHQ%3D%3D',
      },
      breadcrumbData: {
        previous: [
          {
            title: '首頁',
            url: '/',
          },
        ],
        purpose: '關於我們',
      },
      pageTextContent: [
        {
          title: '成立起源',
          content: `
            社會上有許多企業與民間組織都在默默幫助著弱勢團體，人道、動物保育、環境保育皆有不同的擁護者，
            但動物保育、環境保育與人道公益相比仍然是較為小眾、比較容易忽視的議題。<br><br>

            雖然網路上可以查到各縣市、公益團體發布的公益活動或是捐款資訊，
            不過因為資訊散落在各個官網，如果沒有額外宣傳的話曝光率較低，
            也會導致民眾遺漏掉感興趣的主題。<br><br>

            為了增加環境保育、動物保育資訊的曝光度，並減少民眾追蹤資訊上的困擾，
            Natural 團隊於 2016 年成立，致力於整合有關環境議題的主題，增加資訊曝光度。
          `,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625384741923.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Idsw8uEB9Fv%2FenmuCgX19rx8MTe0O8Zc6r%2B0kaBRcCdrqoD%2BTpvalDYuFNUPMLf17gHFEbcHFxDs3ciPNR6ed%2FufB%2BDgKUAjFKkjYZZ4FqhUHjWRdyQUNCKurb4Z3MWedZ9tvdH%2BoDe6HdETcHG5uogpzfTWgrPTEHiaA98G4YnC8Z9sL9olJ6d3zsukk0FWWGVejsIrimaywZoHvfU4Cap7OCDxSNZ4FzyCLnPIFrUfnRaAqua%2BzLR5Iml0t2wD5XSl7v4QJxiso8sPqLR6WF%2FCNLMlgliNPFI%2BULryqksTkM%2FssKM18bSztBA%2Ba6hXfDz0IZCIz1T7IDGQi0yeOQ%3D%3D',
        },
        {
          title: '有關平台',
          content: `
            Natural 團隊起初由幾個擁有相同意志的人組成，
            期間不斷積極的接洽各縣市與公益團體，推廣整合平台的優勢，
            Natural 環保資訊整合平台除了能增加活動的曝光率、民眾獲取資料的方便性，
            更能提升民眾的參與度。<br><br>

            Natural 環保資訊整合平台成立雖然只有短短 5 年，但使用人數逐年增加，
            共累計超過萬人透過 Natural 環保資訊整合平台預約環保、動保實體活動，
            募款專案的募款成效及有機商品的回響皆大受好評。<br><br>

            除了整合資訊外，Natural 環保資訊整合平台也協助參與公益活動的舉辦及宣傳，
            目前已舉辦過包含淨灘、淨溪、淨山等大型公益活動，
            活動收益扣除成本後，皆全數捐給不特定、較小眾的環保、動保組織。
          `,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625384601002.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=po%2FuCJ9gdqtC1MPN2G3XcOMaR0NaxXss1h%2Bah3mAPm%2BK5CBP86OOTwB5YkLEEsJuZ37ceMrjqFfJNKA4bcmoOhk4ZQyUHb%2Fgt2ow86aGKI%2Fmv2DtR2vowPBYLBW5hmBvXBqU%2BC2K0XcoNQqX7zaKXhXIiC7D5m2cdBr66rqUqGhgzBVKIo0wsTEUSYQU%2FmvECOW%2FxJMoLKOM1ONGZ8Ar9C%2Fr1uSLWMTQpX5a0hDn3uk3Eo9a%2BRZhF45LSZ4NLX6DhmDw18G1gycLTihdhBCTAEgyuz8yNrDK9TrVHJGd9GnWWTU6eWDxwhSJf%2BZzXGeh7q6YnJ8MsOqgy%2BYEfGI53A%3D%3D',
        },
        {
          title: '未來展望',
          content: `
            Natural 環保資訊整合平台至今已統整近千場有關於環境教育、動物保育的活動、講座、
            募資等資訊，也接洽過百家廠商洽談有機商品的合作。<br><br>

            希望可以藉由網路力量及整合平台的優勢，讓宣傳資源較少的公益團隊能夠透過
            Natural 環保資訊整合平台增加曝光度，維持公益團隊的運作。<br><br>

            民眾也能利用 Natural 環保資訊整合平台，快速獲取公益活動，用自己的方式為環境盡一份心力。
          `,
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625386513455.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=moZhegjw%2FvCbWRXbREXgpFLaQh5gEL4t%2F%2B3LnHxTUIh2r%2F0qnUp7hGW7l03E%2BTFv5scCn1dhVAmXZcUZtqJ56bwU6gAlwExwcAmWtldyMT3IcJpwJA%2BaiF0FGgk2Jqwhni6WgRuSlsux%2Fef5v1MctATYVz6Ds2o%2Bpg%2F5tnviMHK9Zx6rT%2BNQaTqhBvu%2FpZhkvwrArazx%2BG5vOSB7Qsbu7Szr8obEftmIwfBTaQ2h5XeIgMxKTysvwERU%2BnwBBXSOiFQVJC%2F6Hlfsh5Z7EyRtMD7PlG6VKpbNjgc3UXga5Esq0IQQQb%2BycapLwTEsmowzPwXanU6dV6vA%2FkPwelICkQ%3D%3D',
        },
      ],
    };
  },
  components: {
    HeaderBackgroundImg,
    Breadcrumb,
  },
  methods: {
    backTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  created() {
    this.backTop();
  },
};
</script>
