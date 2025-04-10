<template>
  <ul class="row m-0 list-unstyled">
    <li
      v-for="item in naturalThreatImgs"
      :key="item.img"
      data-aos="zoom-in"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="500"
      data-aos-duration="900"
      data-aos-easing="ease-out-back"
      class="col-sm-12 col-md-6 col-lg-3 p-0
        position-relative
        d-flex justify-content-center align-items-center"
    >
      <input
        type="checkbox"
        class="naturalThreat__card__item__checkbox d-none"
        :id="`naturalThreat__card__item__checkbox_${item.id + 1}`"
        :value="`natural_threat_card_${item.id + 1}`"
      >
      <label
        name="card_items"
        class="naturalThreat__card__item__label pointer-no-hover"
        :for="`naturalThreat__card__item__checkbox_${item.id + 1}`"
      >
        <img
          :src="item.img"
          :alt="`圖片${item.id + 1}`"
          class="natural_threat_card_img w-100"
        >
        <div
          class="naturalThreat__card__item__content"
          :id="`naturalThreat__card__item__content_${item.id + 1}`"
        >
          <div>
            <h3 class="naturalThreat__card__item__title">
              {{ item.title }}
            </h3>
            <p
              class="naturalThreat__card__item__text"
              :id="`naturalThreat__card__item__text_${item.id + 1}`"
            >
              {{ item.text }}
            </p>
          </div>
        </div>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      naturalThreatImgs: [
        {
          id: 0,
          title: '地球暖化',
          text: '大量的二氧化碳排放量增加導致溫室效應，冰川融化、海平面上升，氣候逐年異常，近年來天災頻傳。',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625127854750.jpg',
        },
        {
          id: 1,
          title: '棲息地被破壞',
          text: '土地開發導致野生動物家園被破壞，野生動物被迫與人類共存，路殺或動物入侵住宅而被殺害的事件不斷發生。',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625128634449.jpg',
        },
        {
          id: 2,
          title: '外來種入侵',
          text: '流浪貓狗、琵琶魚(垃圾魚)、福壽螺等外來種在台灣沒有天敵，不斷繁殖的狀況下侵略到原生種的生活領域，迫害到台灣原生種生態，已有多個物種因外來種入侵的關係導致滅絕。',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625127388125.jpg',
        },
        {
          id: 3,
          title: '海洋汙染',
          text: '塑料製品、垃圾、有毒廢水流入海洋，海洋生物因有毒液體或將誤食垃圾造成死亡。',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625127527250.jpg',
        },
      ],
    };
  },
};
</script>
