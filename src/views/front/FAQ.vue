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
              fqaTitle: '目前有多少個環保機構可以選擇？',
              faqContent: '目前 Natural 環保資訊整合平台上整合了上百家環境保育機構及動物保育機構的資料，您可以透過 <strong>會員中心 → 平台資訊 → 查詢現有保育機構</strong> 查詢到現有、可進行捐款的相關機構。也可於募款專案付款完成後，前往 Email 挑選想要捐款的環境保育機構及動物保育機構。',
            },
            {
              id: 'question_2',
              fqaTitle: '我想捐款給特定的機構，可以嗎？要選哪個方案？',
              faqContent: '可以的，您可以選擇「募款專案 - 自選特定捐款機構」，目前我們提供兩種不同金額的方案。<br>付款完成後會收到付款成功的 Email，您可以在 Email 的附件中選擇想要捐款的機構。',
            },
            {
              id: 'question_3',
              fqaTitle: '我想要捐款，但是不知道可以捐給哪個機構，有推薦的嗎？',
              faqContent: '目前平台上有「募款專案 - 自選特定捐款機構」、「野生動物救援行動」、「野鳥救援行動」、「樹木/樹苗認養」這四大類募款專案可供挑選，詳細專案內容可至商品頁面查看。<br>如果無法決定想要捐款的機構類型，也可以選擇「募款專案 - 不特定捐款機構」。',
            },
            {
              id: 'question_4',
              fqaTitle: '「募款專案 - 不特定捐款機構」是甚麼方案？',
              faqContent: '為了讓不同的機構都能受惠，因此此方案是由 Natural 環保資訊整合平台於每個月月初隨機挑選一個環境保育或動物保育之相關機構 ( 每個月的機構類型都不同 )，並於次月初將募款金額全數捐至該機構。若想捐款但無法自行決定捐款單位或類型，可以參考此方案。<br><small><em>※ 舉例：7 月選出的捐款對象為「野灣野生動物救援中心 - 池上站」，7 月募款之總金額將於 8 月初全數捐至「野灣野生動物救援中心 - 池上站」。</em></small>',
            },
            {
              id: 'question_5',
              fqaTitle: '我已經透過平台進行捐款了，但是捐款收據上的人是我的還是平台？',
              faqContent: '雖然捐款金額是由 Natural 環保資訊整合平台統一匯入環保機構，但 Natural 環保資訊整合平台並不會掛名捐款人，您捐款完之後會收到電子或是紙本捐款收據，捐款人名稱為訂單訂購人，如果捐款收據有發現任何問題，請盡速聯絡客服人員。<br><small><em>※ 舉例：劉小明在 7/25 透過 Natural 環保資訊整合平台捐款了 1000 元，Natural 環保資訊整合平台會使用「劉小明」的名義進行捐款，而劉小明收到的捐款收據上的捐款人名稱就是自己。</em></small>',
            },
            {
              id: 'question_6',
              fqaTitle: '網路捐款我覺得不安全，你們有提供現金捐款嗎？',
              faqContent: '可以，我們有提供現金捐款。<br>您可於服務時間前往我們位於台北的地址，現場捐款後請保留付款收據，待您收到環保機構開立的捐款收據後再將我們的付款收據銷毀即可。<br>如您不方便到現場捐款，又擔心線上信用卡交易不安全，我們也有提供 ATM 匯款，您可就近至郵局或銀行進行劃撥匯款，付款完成後會收到 Natural 環保資訊整合平台發送的 Email，捐款收據將會由環保機構郵寄給您。',
            },
          ],
        },
        charitableActivities: {
          id: 'charitableActivities',
          title: '公益活動',
          faqs: [
            {
              id: 'question_1',
              fqaTitle: '為什麼沒有我所在地區的公益活動資訊？',
              faqContent: 'Natural 環保資訊整合平台上的公益活動為目前正開放報名的活動，活動地點與報名資訊皆以當地縣政府或公益團體公布為主，Natural 環保資訊整合平台也會不定時舉辦相關環境保育公益活動。<br>如您擔心遺漏感興趣的資訊，歡迎隨時訂閱 Natural 環保資訊整合平台，當有最新消息時我們將優先通知您，讓您在忙碌的同時也不必擔心錯過喜歡的活動。',
            },
            {
              id: 'question_2',
              fqaTitle: '我要怎麼報名參加？',
              faqContent: '您可至 <a href="#/products" class="link-success-light">線上商城</a> 選擇想參加的公益活動，加入購物車並填寫訂購人資訊，付款完成後會收到 Natural 環保資訊整合平台寄出 Email ，確認 Email 中的資訊無誤後即完成報名。',
            },
            {
              id: 'question_3',
              fqaTitle: '怎樣才能知道我有沒有報名成功？',
              faqContent: '付款完成後您會收到一封由 Natural 環保資訊整合平台寄出的 Email ，確認 Email 中的資訊無誤後即完成報名。<br><small><em>※ 請注意，如超過繳款期限仍未進行付款將會取消參加資格。</em></small>',
            },
            {
              id: 'question_4',
              fqaTitle: '付款成功後，如果臨時有事，可以退費嗎？',
              faqContent: '如已經付款完成，但因個人因素必須取消報名者，退費說明如下：<br>活動開始前 60 天取消退全額，<br>活動開始前 30 天取消，扣除相關行政、保險費用後退還剩餘費用，<br>活動開始前 7~14 天取消僅退 20%，未退還之費用扣除相關行政、保險費用後，將捐至當月平台指定之環保機構。<br>活動當天未出席或取消者不退費，未退還之費用扣除相關行政、保險費用後，將捐至當月平台指定之環保機構。<br><small><em>※ 如是因為天災或主辦單位因素導致活動無法如期舉行，您可選擇退還費用，或是參加改期之活動。</em></small>',
            },
          ],
        },
        discourse: {
          id: 'discourse',
          title: '講座',
          faqs: [
            {
              id: 'question_1',
              fqaTitle: '付款成功後，可以取消嗎？',
              faqContent: '如已經付款完成，但因個人因素必須取消報名者，退費說明如下：<br>活動開始前 60 天取消退全額，<br>活動開始前 30 天取消，扣除相關行政、保險費用後退還剩餘費用，<br>活動開始前 7~14 天取消僅退 20%，未退還之費用扣除相關行政、保險費用後，將捐至當月平台指定之環保機構。<br>活動當天未出席或取消者不退費，未退還之費用扣除相關行政、保險費用後，將捐至當月平台指定之環保機構。<br><small><em>※ 如是因為天災或主辦單位因素導致活動無法如期舉行，您可選擇退還費用，或是參加改期之活動。</em></small>',
            },
            {
              id: 'question_2',
              fqaTitle: '如果當天有事情無法出席，可以退費嗎？',
              faqContent: '如已經付款完成，但因個人因素必須取消報名者，退費說明如下：<br>活動開始前 60 天取消退全額，<br>活動開始前 30 天取消，扣除相關行政、保險費用後退還剩餘費用，<br>活動開始前 7~14 天取消僅退 20%，未退還之費用扣除相關行政、保險費用後，將捐至當月平台指定之環保機構。<br>活動當天未出席或取消者不退費，未退還之費用扣除相關行政、保險費用後，將捐至當月平台指定之環保機構。<br><small><em>※ 如是因為天災或主辦單位因素導致活動無法如期舉行，您可選擇退還費用，或是參加改期之活動。</em></small>',
            },
            {
              id: 'question_3',
              fqaTitle: '演講地點都是固定的嗎？',
              faqContent: '講座的演講地點皆以當地縣政府或公益團體公布為主，您可挑選您方便前往的地區進行報名，Natural 環保資訊整合平台也會不定時更新更多的演講資訊。<br>如您擔心遺漏感興趣的資訊，歡迎隨時訂閱 Natural 環保資訊整合平台，當有最新消息時我們將優先通知您，讓您在忙碌的同時也不必擔心錯過喜歡的活動。',
            },
            {
              id: 'question_4',
              fqaTitle: '未來是否會增加其他縣市的場次？',
              faqContent: '',
            },
            {
              id: 'question_5',
              fqaTitle: '其他類似的環保講座都不用錢，為什麼你們要收費？',
              faqContent: '',
            },
          ],
        },
        organicFood: {
          id: 'organicFood',
          title: '有機食品',
          faqs: [
            {
              id: 'question_1',
              fqaTitle: '網站上的有機產品有國家認證嗎？安全嗎？',
              faqContent: '',
            },
            {
              id: 'question_2',
              fqaTitle: '有機產品的產地來自哪裡？',
              faqContent: '',
            },
            {
              id: 'question_3',
              fqaTitle: '你們的蔬果新鮮嗎？',
              faqContent: '',
            },
            {
              id: 'question_4',
              fqaTitle: '如果發現收到的產品有問題，我可以退貨嗎？',
              faqContent: '',
            },
            {
              id: 'question_5',
              fqaTitle: '蔬菜組合和水果組合好像份量都很多，你們有數量比較少的方案嗎？',
              faqContent: '',
            },
            {
              id: 'question_6',
              fqaTitle: '蔬菜組合和水果組合份量太多了？沒辦法一次吃完該怎麼辦？',
              faqContent: '',
            },
          ],
        },
        otherProducts: {
          id: 'otherProducts',
          title: '環保商品',
          faqs: [
            {
              id: 'question_1',
              fqaTitle: '下訂之後多久會到貨？',
              faqContent: '',
            },
            {
              id: 'question_2',
              fqaTitle: '如果發現收到的產品有問題，我該怎麼處理？',
              faqContent: '',
            },
            {
              id: 'question_3',
              fqaTitle: '不鏽鋼這類的產品有經過檢驗嗎？',
              faqContent: '',
            },
            {
              id: 'question_4',
              fqaTitle: '這些產品是你們的品牌嗎？',
              faqContent: '',
            },
          ],
        },
        abuotNatural: {
          id: 'abuotNatural',
          title: '其他問題',
          faqs: [
            {
              id: 'question_',
              fqaTitle: '我可以取消訂單嗎？',
              faqContent: '',
            },
            {
              id: 'question_',
              fqaTitle: '我的訂單被取消了，怎麼辦！',
              faqContent: '',
            },
            {
              id: 'question_',
              fqaTitle: '平台上有註明產品和活動的收益會捐到環保機構，但會被捐到哪個機構呢？',
              faqContent: '',
            },
            {
              id: 'question_',
              fqaTitle: '我有興趣與你們合作，請問要如何聯絡？',
              faqContent: '',
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
