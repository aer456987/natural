<template>
  <!-- 引言用圖 -->
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
        natural_threat_card_item
        d-flex justify-content-center align-items-center"
    >
      <input
        type="checkbox"
        class="natural_threat_card_checkbox"
        :id="`natural_threat_card_checkbox_${item.id + 1}`"
        :value="`natural_threat_card_${item.id + 1}`"
      >
      <label
        name="card_items"
        class="natural_threat_card_label"
        :for="`natural_threat_card_checkbox_${item.id + 1}`"
      >
        <img
          :src="item.img"
          :alt="`圖片${item.id + 1}`"
          class="natural_threat_card_img w-100"
        >
        <div
          class="natural_threat_card_content"
          :id="`natural_threat_card_content_${item.id + 1}`"
        >
          <div>
            <h3 class="natural_threat_card_title">
              {{ item.title }}
            </h3>
            <p
              class="natural_threat_card_text"
              :id="`natural_threat_card_text_${item.id + 1}`"
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
          title: '棲息地被破壞',
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
          id: 3,
          title: '海洋汙染',
          text: '塑料製品、垃圾、有毒廢水流入海洋，海洋生物因有毒液體或將誤食垃圾造成死亡。',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625127527250.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ZtY8RZgcfqInZKrxt%2F9Mcpp%2BXJgL99GpoR8ffCLZmn2hQ8%2BeSd2rQ2vm3mNMK5oqM4PAMS5mwqQXX75KDfEjJkQFYGeWE5qCDQ2DhCyn1p8z0%2FHXvudAc4NAgti%2FRanIn8o0ZUVPtoxMySuFwVCMKORESNt5MRHG1CBCqaoPIFsA5rXymxfEaN46driWCf5E%2FL7jhg1nRgpjMSFWkQFKJYOcon4UWjA9RhfVx6DOdAqDgPBugz%2FsI2Gp0N7yPJ%2Fwk7NicesEKsuyyhOFfoQ7LyftzwmdUFg38uCkQXFXiaHvUUsCbRd1s1lOocAyNSm3ecU1LIa%2BfzXDs7CsCKaYVA%3D%3D',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/css/allStyle';
@import '~swiper/swiper.scss';

.natural_threat_card_item{
  position: relative;
}

.natural_threat_card_title, .natural_threat_card_text{
  text-align: center;
  color: $white;
}

.natural_threat_card_checkbox{
  display: none;
}
.natural_threat_card_label{
  cursor: pointer;
}

.natural_threat_card_checkbox:checked+.natural_threat_card_label{
  .natural_threat_card_content{
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .natural_threat_card_title{
    margin-bottom: 12px;
  }

  .natural_threat_card_text{
    height: auto;
    transform: translateY(0);
    opacity: 1;
  }
}

.natural_threat_card_content{
  @include custom_position_bottom(0%);
  width: 90%;
  height: 25%;
  padding: 20px 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  vertical-align: bottom;
  background: rgba($dark, .6);
  transition-duration: .25s;
  overflow: hidden;

  div{
    height: auto;
  }

  &:hover{
    height: 30%;
    transition-duration: .25s;
  }

  // 捲軸本身，可以設定寬度
  &::-webkit-scrollbar{
    width: 8px;
  }

  // 捲軸可以拉的部分
  &::-webkit-scrollbar-thumb{
    border-radius: 5px;
    background-color: rgba($white, .8);
  }

  // 捲軸空的地方，也可以說背景的顏色
  &::-webkit-scrollbar-track{
    box-shadow: inset 0 0 6px rgba($white, 1);
  }
}

.natural_threat_card_title{
  margin-bottom: 0;
  font-size: 24px;
  font-weight: bold;
  transition-duration: .25s;
}
.natural_threat_card_text{
  height: 0;
  margin-bottom: 0;
  font-size: 16px;
  text-align: left;
  transform: translateY(10px);
  transition-duration: .25s;
  opacity: 0;
}

// RWD
@media(max-width: 1200px){
  .natural_threat_card_checkbox:checked+.natural_threat_card_label{
    .natural_threat_card_content{
      display: block;
      overflow-y: auto;
    }
  }
}

@media(max-width: 992px){
  .natural_threat_card_checkbox:checked+.natural_threat_card_label{
    .natural_threat_card_content{
      display: flex;
      justify-content: center;
      align-items: center;
      overflow-y: hidden;
    }
  }
}

@media(max-width: 414px){
  .natural_threat_card_checkbox:checked+.natural_threat_card_label{
    .natural_threat_card_content{
      overflow-y: auto;
    }

    .natural_threat_card_text{
      display: block;
    }
  }
  .natural_threat_card_title{
    font-size: 20px;
  }
  .natural_threat_card_text{
    display: none;
  }
}

@media(max-width: 320px){
  .natural_threat_card_checkbox:checked+.natural_threat_card_label{
    .natural_threat_card_content{
      display: block;
    }
  }

  .natural_threat_card_title{
    font-size: 18px;
  }
}
</style>
