<template>
  <HeaderBackgroundImg
    :header-title="headerData.title"
    :header-imgUrl="headerData.imgUrl"
  ></HeaderBackgroundImg>

  <main class="container pageContent user_select_none">
    <div class="py-4">
      <Breadcrumb :breadcrumb-data="breadcrumbData"></Breadcrumb>

      <div
        class="row py-3"
      >
        <template
          v-for="(item, key) in FAQData"
          :key="item.id"
        >
        <section
          class="col-12 py-3"
          data-aos="fade-up"
          data-aos-easing="ease-out-back"
          data-aos-anchor-placement="top-bottom"
          :data-aos-delay="`1${key+1}0`"
          data-aos-duration="700"
        >
          <h2 class="h3 fw-bold pb-1">
            {{ item.title }}
          </h2>

          <template
            v-for="(faq, key) in item.faqs"
            :key="`${item.id}_${key}`"
          >
            <ul class="accordion accordion-flush shadow-sm">

              <li class="accordion-item border-bottom">
                <h3
                  class="accordion-header"
                  :id="`${item.id}_${key + 1}`"
                >
                  <button
                    type="button"
                    class="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#${item.id}_${faq.id}`"
                    aria-expanded="true"
                    :aria-controls="`${item.id}_${faq.id}`"
                  >
                    {{ faq.fqaTitle }}
                  </button>
                </h3>

                <div
                  :id="`${item.id}_${faq.id}`"
                  class="accordion-collapse collapse"
                  :aria-labelledby="`${item.id}_${key + 1}`"
                >
                  <div class="accordion-body px-4 pt-2 pb-1 text-white-space">
                    <p v-html="faq.faqContent"></p>
                  </div>
                </div>
              </li>

            </ul>
          </template>

        </section>

        </template>

      </div>
    </div>
  </main>
</template>

<script>
import HeaderBackgroundImg from '@/components/HeaderBackgroundImg.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';

export default {
  name: 'FAQ',
  data() {
    return {
      headerData: { // banner
        title: '常見問答',
        imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625383909848.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=I9j4wMF6Ju2sDD%2Bt5cyertLtgbUPb79pLuHjlhHmilogicWyAs70SOUZjs2iJ8m5U8CzCWPV2AHhgK%2FEHrHfbvOLPTb3HMRNjffgTCe%2BCHtZJNefxWz3P4X520ruiMmQXK8iRyainm9NKjEM9nWPIbnJ28utF95W%2F%2Fc292KtCnSHJATO3cNUXfzZMgKAMIztyXl9RJwLIb9%2BkP77JcJVmFKjv6hwhmfH1bKXFAy%2BuG2mhzbYI3eU%2BGJiIEMXJTdFZjgUrxewVd1QlkUCy4PvNBMU3CsYi6dLJ2vwo45lPiqP8f%2BmYvFCOoHJ7I5hzL7KSgZBor3Lhrr1rdgwlf64rA%3D%3D',
      },
      breadcrumbData: { // 麵包屑
        previous: [ // 上一個(多個)
          {
            title: '首頁',
            url: '/',
          },
        ],
        purpose: '常見問答', // 目前頁面
      },
      FAQData: {
        fundraisingProject: {
          id: 'fundraisingProject',
          title: '募資專案',
          faqs: [
            {
              id: 'question_1',
              fqaTitle: '我想捐款給特定的機構，可以嗎？要選哪個方案？',
              faqContent: '可以的，您可以選擇「募款專案 - 自選特定捐款機構」，目前我們提供兩種不同金額的方案。<br>付款完成後會收到付款成功的 Email，您可以在 Email 的附件中選擇想要捐款的機構。',
            },
            {
              id: 'question_2',
              fqaTitle: '我想要捐款，但是不知道可以捐給哪個機構，有推薦的嗎？',
              faqContent: '目前平台上有「募款專案 - 自選特定捐款機構」、「野生動物救援行動」、「野鳥救援行動」、「樹木/樹苗認養」這四大類募款專案可供挑選，詳細專案內容可至商品頁面查看。<br>如果無法決定想要捐款的機構類型，也可以選擇「募款專案 - 不特定捐款機構」。',
            },
            {
              id: 'question_3',
              fqaTitle: '「募款專案 - 不特定捐款機構」是甚麼方案？',
              faqContent: '為了讓不同的機構都能受惠，因此此方案是由 Natural 環保資訊整合平台於每個月月初隨機挑選一個環境保育或動物保育之相關機構 ( 每個月的機構類型都不同 )，並於次月初將募款金額全數捐至該機構。若想捐款但無法自行決定捐款單位或類型，可以參考此方案。<br><small><em>※ 舉例：7 月選出的捐款對象為「野灣野生動物救援中心 - 池上站」，7 月募款之總金額將於 8 月初全數捐至「野灣野生動物救援中心 - 池上站」。</em></small>',
            },
            {
              id: 'question_4',
              fqaTitle: '我已經透過平台進行捐款了，但是捐款收據上的人是我的還是平台？',
              faqContent: '雖然捐款金額是由 Natural 環保資訊整合平台統一匯入環保機構，但 Natural 環保資訊整合平台並不會掛名捐款人，您捐款完之後會收到電子或是紙本捐款收據，捐款人名稱為訂單訂購人，如果捐款收據有發現任何問題，請盡速聯絡客服人員。<br><small><em>※ 舉例：劉小明在 7/25 透過 Natural 環保資訊整合平台捐款了 1000 元，Natural 環保資訊整合平台會使用「劉小明」的名義進行捐款，而劉小明收到的捐款收據上的捐款人名稱就是自己。</em></small>',
            },
          ],
        },
        charitableActivities: {
          id: 'charitableActivities',
          title: '公益活動',
          faqs: [
            {
              id: 'question_1',
              fqaTitle: '問題一',
              faqContent: '我有問題想要問',
            },
            {
              id: 'question_2',
              fqaTitle: '問題二',
              faqContent: '之二我有問題想要問',
            },
          ],
        },
        discourse: {
          id: 'discourse',
          title: '講座',
          faqs: [
            {
              id: 'question_1',
              fqaTitle: '問題一',
              faqContent: '我有問題想要問',
            },
            {
              id: 'question_2',
              fqaTitle: '問題二',
              faqContent: '之二我有問題想要問',
            },
          ],
        },
        organicFood: {
          id: 'organicFood',
          title: '有機食品',
          faqs: [
            {
              id: 'question_1',
              fqaTitle: '問題一',
              faqContent: '我有問題想要問',
            },
            {
              id: 'question_2',
              fqaTitle: '問題二',
              faqContent: '之二我有問題想要問',
            },
          ],
        },
        otherProducts: {
          id: 'otherProducts',
          title: '環保商品',
          faqs: [
            {
              id: 'question_1',
              fqaTitle: '問題一',
              faqContent: '我有問題想要問',
            },
            {
              id: 'question_2',
              fqaTitle: '問題二',
              faqContent: '之二我有問題想要問',
            },
          ],
        },
      },
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
