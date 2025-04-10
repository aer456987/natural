<template>
  <HeaderBackgroundImg
    :header-title="headerData.title"
    :header-imgUrl="headerData.imgUrl" />

  <main class="container page-content user-select-none">
    <div class="py-4">
      <Breadcrumb :breadcrumb-data="breadcrumbData" />

      <div class="row py-3">
        <section
          v-for="(item, key) in FAQData"
          :key="item.id"
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

            <ul class="accordion accordion-flush shadow-sm">
              <li
                v-for="(faq, key) in item.faqs"
                :key="`${item.id}_${key}`"
                class="accordion-item border-bottom"
              >
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
                    <span class="p-1 me-1 border bg-secondary rounded text-primary">
                      {{ `Q${key + 1}` }}
                    </span>
                    {{ `${faq.fqaTitle}` }}
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
        </section>
      </div>
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
        title: '常見問答',
        imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1627447004774.jpg',
      },
      breadcrumbData: {
        previous: [
          {
            title: '首頁',
            url: '/',
          },
        ],
        purpose: '常見問答',
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
              faqContent: '目前平台上有「募款專案 - 自選特定捐款機構」、「野生動物救援行動」、「野鳥救援行動」、「樹木/樹苗認養」這四大類募款專案可供挑選，詳細專案內容可至產品介紹頁面查看。<br>如果無法決定想要捐款的機構類型，也可以選擇「募款專案 - 不特定捐款機構」。',
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
              fqaTitle: '其他類似的環保講座都不用錢，為什麼你們要收費？',
              faqContent: '我們收取的費用包含場地租借費、清潔費及講師費...等費用，活動收益扣除基本支出之後將全數捐至當月 Natural 環保資訊整合平台選出的環境保育機構或動物保育機構。',
            },
            {
              id: 'question_2',
              fqaTitle: '付款成功後，可以取消嗎？',
              faqContent: '如已經付款完成，但因個人因素必須取消報名者，退費說明如下：<br>活動開始前 60 天取消退全額，<br>活動開始前 30 天取消，扣除相關行政、保險費用後退還剩餘費用，<br>活動開始前 7~14 天取消僅退 20%，未退還之費用扣除相關行政、保險費用後，將捐至當月平台指定之環保機構。<br>活動當天未出席或取消者不退費，未退還之費用扣除相關行政、保險費用後，將捐至當月平台指定之環境保育機構或動物保育機構。<br><small><em>※ 如是因為天災或主辦單位因素導致活動無法如期舉行，您可選擇退還費用，或是參加改期之活動。</em></small>',
            },
            {
              id: 'question_3',
              fqaTitle: '如果當天有事情無法出席，可以退費嗎？',
              faqContent: '如已經付款完成，但因個人因素必須取消報名者，退費說明如下：<br>活動開始前 60 天取消退全額，<br>活動開始前 30 天取消，扣除相關行政、保險費用後退還剩餘費用，<br>活動開始前 7~14 天取消僅退 20%，未退還之費用扣除相關行政、保險費用後，將捐至當月平台指定之環保機構。<br>活動當天未出席或取消者不退費，未退還之費用扣除相關行政、保險費用後，將捐至當月平台指定之環境保育機構或動物保育機構。<br><small><em>※ 如是因為天災或主辦單位因素導致活動無法如期舉行，您可選擇退還費用，或是參加改期之活動。</em></small>',
            },
            {
              id: 'question_4',
              fqaTitle: '演講地點都是固定的嗎？',
              faqContent: '講座的演講地點皆以當地縣政府或公益團體公布為主，您可挑選您方便前往的地區進行報名，Natural 環保資訊整合平台也會不定時更新更多的演講主題供民眾選擇。<br>如您擔心遺漏感興趣的資訊，歡迎隨時訂閱 Natural 環保資訊整合平台，當有最新消息時我們將優先通知您，讓您在忙碌的同時也不必擔心錯過喜歡的活動。',
            },
            {
              id: 'question_5',
              fqaTitle: '未來是否會增加其他縣市的場次？',
              faqContent: '會的，我們至今仍積極與不同的環保機構或動物保育機構接洽，未來將會釋出更多不同且有趣的演講主題與場次供民眾選擇。<br>如您擔心遺漏感興趣的資訊，歡迎隨時訂閱 Natural 環保資訊整合平台，當有最新消息時我們將優先通知您，讓您在忙碌的同時也不必擔心錯過喜歡的活動。',
            },
          ],
        },
        organicFood: {
          id: 'organicFood',
          title: '有機食品',
          faqs: [
            {
              id: 'question_1',
              fqaTitle: '你們的有機產品有國家認證嗎？安全嗎？',
              faqContent: 'Natural 環保資訊整合平台上販售的有機產品皆有獲得國家有機農產品驗證標章，產品介紹頁可查詢到相關資訊，如果您仍對產品有任何問題也歡迎致電客服或使用客服信箱與我們聯絡。',
            },
            {
              id: 'question_2',
              fqaTitle: '有機產品的產地在哪裡？',
              faqContent: 'Natural 團隊支持在地農民，因此 Natural 環保資訊整合平台上販售的有機商品產地皆出自台灣(MIT)，並有獲得國家有機農產品驗證標章，產品介紹頁可查詢到相關資訊，如果您仍對產品有任何問題也歡迎致電客服或使用客服信箱與我們聯絡。',
            },
            {
              id: 'question_3',
              fqaTitle: '你們的蔬果新鮮嗎？',
              faqContent: 'Natural 環保資訊整合平台上販售的蔬果組合都是當季的熱門農產品，種植時無使用農藥，採人工除草、除蟲，農產品皆有獲得國家有機農產品驗證標章，當季新鮮採收，冷藏宅配到府，歡迎您 <a href="#/products" class="link-success-light">線上選購</a>。',
            },
            {
              id: 'question_4',
              fqaTitle: '如果發現收到的產品有問題，我可以退貨嗎？',
              faqContent: '蔬果類產品因使用無農藥摘種，表面有些許蟲咬狀況實屬正常。<br>食材及食品類因衛生問題恕不提供退貨服務，真空包裝類產品如發現有失真空的狀況請聯絡客服處理，如有需要換貨則不得將產品拆封使用，以免損失換貨權益。<br>建議您在開箱前進行錄影以確保您的權益，如有嚴重缺損請聯絡客服，並提供您的錄影以便客服人員盡速為您處理後續換貨手續。',
            },
            {
              id: 'question_5',
              fqaTitle: '蔬菜組合和水果組合好像份量都很多，你們有數量比較少的方案嗎？',
              faqContent: '因應最近疫情關係，為減少民眾出門購買食材的風險，目前僅提供大份量之組合，日後也將推出少量組合方案，敬請期待！',
            },
            {
              id: 'question_6',
              fqaTitle: '蔬菜組合和水果組合份量太多了？沒辦法一次吃完該怎麼辦？',
              faqContent: '台灣潮濕的氣候，以及錯誤的保存方式可能會導致食材腐敗造成浪費，因此我們在出貨箱中皆有附上食材保存說明書，請依照說明書指示保存食材。',
            },
          ],
        },
        otherProducts: {
          id: 'otherProducts',
          title: '環保商品',
          faqs: [
            {
              id: 'question_1',
              fqaTitle: '訂單送出之後多久會收到我買的東西？',
              faqContent: '透過 Natural 環保資訊整合平台下單後，約 1~2 天內出貨 ( 如遇假日往後順延 )，宅配約 1~2 天到貨，選擇超商取貨者，到貨時間約落在 3~4 天左右，實際到貨時間以貨運公司為主。',
            },
            {
              id: 'question_2',
              fqaTitle: '如果發現收到的產品有問題，我該怎麼處理？',
              faqContent: '如發現商品有嚴重瑕疵請聯絡客服並提供相關錄影檔案或照片以便客服人員盡速為您處理，經人員判斷後會協助您退貨或換貨手續。',
            },
            {
              id: 'question_3',
              fqaTitle: '不鏽鋼這類的產品有經過檢驗嗎？',
              faqContent: 'Natural 環保資訊整合平台販售之商品皆有通過相關國家檢驗認證，您可至產品介紹頁查看相關資訊，如果您仍對產品有任何問題也歡迎致電客服或使用客服信箱與我們聯絡。',
            },
            {
              id: 'question_4',
              fqaTitle: '這些產品都是你們的品牌嗎？',
              faqContent: 'Natural 環保資訊整合平台販售的環保商品皆為合作廠商之商品，並非 Natural 環保資訊整合平台的品牌，合作廠商的商品皆有通過相關國家檢驗認證，歡迎您 <a href="#/products" class="link-success-light">前往選購</a>。',
            },
          ],
        },
        abuotNatural: {
          id: 'abuotNatural',
          title: '其他問題',
          faqs: [
            {
              id: 'question_1',
              fqaTitle: '可以取消訂單嗎？',
              faqContent: '所有訂單在未付款前皆可隨時至會員中心取消，如訂單已經付款欲取消者，說明如下：<br>募款專案：付款成功後恕無法退款。<br>公益活動：從提出取消訂單日起算，依天數退還比例費用，詳見「公益活動 Q4」。<br>講座：從提出取消訂單日起算，依天數退還比例費用，詳見「講座 Q2」。<br>有機食品：訂單未出貨前可隨時至會員中心取消，已出貨之訂單無法取消，如收到貨後有任何問題，歡迎隨時聯絡客服。<br>環保商品：訂單未出貨前可隨時至會員中心取消，已出貨之訂單無法取消，如收到貨後有任何問題，歡迎隨時聯絡客服。',
            },
            {
              id: 'question_2',
              fqaTitle: '平台上有註明產品和活動的收益會捐到環保機構，但會被捐到哪個機構呢？',
              faqContent: 'Natural 環保資訊整合平台為了讓不同的環境保育機構及動物保育機構都能接收到民眾的愛心捐款，每個月月初會選出一個不同機構作為當月的指定捐款對象，並將當月相關募款專案之募款金額或是活動收益於次月全數捐至該機構。<br>為了避免單一類型的機構持續受惠，每個月選出的機構類型皆已不重複為主。<br><small><em>※ 舉例：7 月選出的捐款對象為「野灣野生動物救援中心 - 池上站(動物救援類)」，7 月募款之總金額將於 8 月初全數捐至「野灣野生動物救援中心 - 池上站」，而次月的指定捐款對象類型則不會是動物救援類。</em></small>',
            },
            {
              id: 'question_3',
              fqaTitle: '我有興趣與你們合作，請問要如何聯絡？',
              faqContent: '如您有意願合作，歡迎透過客服電話或 Email 與我們聯繫，我們會由專人與您接洽，期待您的來訊。',
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
