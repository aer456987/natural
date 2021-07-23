<template>
  <!-- 引言用圖 -->
  <ul class="row m-0 list-unstyled">
    <template
      v-for="item in naturalThreatImgs"
      :key="item.img"
    >
      <li
        class="col-sm-12 col-md-6 col-lg-3 p-0
          natural_threat_card_item overflow-hidden"
        data-aos="zoom-in-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        <img
          :src="item.img"
          :alt="`圖片${item.id + 1}`"
          class="natural_threat_card_img w-100"
        >
        <div class="natural_threat_card_content">
          <p class="natural_threat_card_title">
            {{ item.title }}
          </p>
          <p class="natural_threat_card_text">
            {{ item.text }}
          </p>
        </div>
      </li>
    </template>
  </ul>
</template>

<style lang="scss">
@import '@/assets/allStyle';
@import '~swiper/swiper.scss';

.natural_threat_card_item{
  position: relative;
  // background: $dark;
  // transition-duration: .3s;
}

.natural_threat_card_title, .natural_threat_card_text{
  text-align: center;
  color: $white;
}

.natural_threat_card_content{
  @include custom_position_bottom(0%);
  width: 90%;
  height: 50%;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 4px;
  vertical-align: bottom;
  background: rgba($dark, .6);
  overflow-y: auto;
}
.natural_threat_card_title{
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: bold;
}
.natural_threat_card_text{
  margin-bottom: 0;
  font-size: 16px;
  text-align: left;
}

// RWD
@media(max-width: 992px){
  .natural_threat_card_content{
    height: 40%
  }

  .natural_threat_card_title{
    font-size: 24px;
  }
  // .natural_threat_card_text{
  //   font-size: 16px;
  // }
}

@media(max-width: 767px){
  .natural_threat_card_content{
    height: auto;
  }
}

@media(max-width: 414px){
  .natural_threat_card_content{
    // @include custom_position_setIn
    // height: 35%;
  }
  .natural_threat_card_title{
    font-size: 22px;
  }
}

@media(max-width: 320px){
  .natural_threat_card_content{
    height: 50%;
  }
  .natural_threat_card_title{
    font-size: 16px;
  }
  .natural_threat_card_text{
    font-size: 14px;
  }
}
</style>

<script>
export default {
  name: 'HomeNaturalThreatCard',
  data() {
    return {
      naturalThreatImgs: [
        {
          id: 0,
          title: '地球暖化',
          text: '大量的二氧化碳排放量增加導致溫室效應，冰川融化、海平面上升，氣候逐年異常，近年來天災頻傳。',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625127854750.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DxXRlpQE4s9MPRnFuv90NlV7tl0OX8Mx7G0YVC%2Fvykudj2ggEMSXphFtwI0P%2BRGpVwnYwaF8RACP1tTRqcnBt8G0oGxZceB9WsBDyaqeAowjXXb6SCEyX1KD14%2BUWFeKs7WILbuYTvnHrSC%2BfTMFJAWkJv2F3XrXsKiqMBDUu%2F4lfCznygZ2Ufa6qpZzlpDAPhldKQ2OyG4bDwBYp9k2AZWzdEgQno9%2FwNrR73Y%2BWFbJ%2Fe2RaC6CE4h4VBFt8pGE5K9z4Rf9jxhew1hm3%2FK71b9arr0YYTUNYYcvMXJtlV2yp8l1zD7OK9%2BCUgpQcMJVXCVEyivUbpEiufuEi7Ir1g%3D%3D',
        },
        {
          id: 1,
          title: '野生棲息地被破壞',
          text: '土地開發導致野生動物家園被破壞，野生動物被迫與人類共存，路殺或動物入侵住宅而被殺害的事件不斷發生。',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625128634449.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mFvbU4Uwg0eVHxsNXz6tw3kNu0AEyHJvuS83zCfQiXzp9Xv1uUmHmPdB%2B7E6Pwfq4JkU4gVBDRqufsf1twCCHdnEaXZAoP1M32onYfeaP4YVA9bAZ0r2CRZKJ%2FGDl4nfdEwNfN92LyBpL5CPrX47fkOYIq7GCUVbDIvWdXDA0uluqbTHeiVrcP82N92W8uyzk3OpC5SzfqKXfnFkSps3cNDDnx6NnjFllC%2Bm%2FcOpBgFyhM24fn5%2FXHeIL0THijvTFPCaTDfuYK3NGLLOXGG5S%2Fmw8ckw7QzlahCQhs%2BT9hjBplbeNOfHF4Rkt7jOr3yCITTNw9OUu6dmNhfiEd3uhQ%3D%3D',
        },
        {
          id: 2,
          title: '外來種入侵',
          text: '流浪貓狗、琵琶魚(垃圾魚)、福壽螺等外來種在台灣沒有天敵，不斷繁殖的狀況下侵略到原生種的生活領域，迫害到台灣原生種生態，已有多個物種因外來種入侵的關係導致滅絕。',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625127388125.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TgxsXewMCVxhphqDz2qry8NzJjU3I0CWXko0vWSmL%2FEeU9oe3%2BaAFlMp5GF0O82SjFYByUzKldixsijxSbaVu%2BUxw5%2B%2BecewJBluPl88Y%2BbHZHdTSBvWo9x4g6MBzZ2Wh8enT8MrcyGyAPU9jQ%2FjZPTNLQfGHoM0Rct8OEfzR6cbZ%2BMCgx%2Bgx%2FhRzCBCqSSH%2B3z9yl3b5ZCOoPROpZaDgiJbUQFH5riNVGs6tidXkeW5S79v0zp0HKiH14C0f%2F89uTKNBxpPY2tYvM1wuTC9zqPwOjqENZWm%2FUKKKlv5hTCuGolsZA%2BZcIuVfUwRpLkhbchPGBSel4uvbdE84wa48A%3D%3D',
        },
        {
          id: 5,
          title: '海洋汙染',
          text: '塑料製品、垃圾、有毒廢水流入海洋，海洋生物因有毒液體或將誤食垃圾造成死亡。',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625127527250.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ZtY8RZgcfqInZKrxt%2F9Mcpp%2BXJgL99GpoR8ffCLZmn2hQ8%2BeSd2rQ2vm3mNMK5oqM4PAMS5mwqQXX75KDfEjJkQFYGeWE5qCDQ2DhCyn1p8z0%2FHXvudAc4NAgti%2FRanIn8o0ZUVPtoxMySuFwVCMKORESNt5MRHG1CBCqaoPIFsA5rXymxfEaN46driWCf5E%2FL7jhg1nRgpjMSFWkQFKJYOcon4UWjA9RhfVx6DOdAqDgPBugz%2FsI2Gp0N7yPJ%2Fwk7NicesEKsuyyhOFfoQ7LyftzwmdUFg38uCkQXFXiaHvUUsCbRd1s1lOocAyNSm3ecU1LIa%2BfzXDs7CsCKaYVA%3D%3D',
        },
      ],
    };
  },
};
</script>
