<template>
  <section class="row m-0 rounded-1 overflow-hidden">
    <template
      v-for="item in naturalThreatImgs"
      :key="item.img"
    >
      <div class="col-6 col-sm-6 col-md-3 p-0">
        <div class="set_in_style">
          <p class="set_in_text fs-3 fw-bold">
            {{ item.text }}
          </p>
          <img
            :src="item.img"
            :alt="`圖片${item.id + 1}`"
            class="set_in_img w-100"
          >
        </div>
      </div>
    </template>
  </section>
</template>

<style lang="scss">
  .set_in_style{
    position: relative;
    overflow: hidden;
    background: black;

    .set_in_text{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: white;
      transition-duration: .5s;
      opacity: 1;
    }

    .set_in_img{
      transition-duration: .5s;
      opacity: .4;
    }
  }

  .set_in_style:hover{
    transition-duration: .5s;

    .set_in_text{
      top: 60%;
      opacity: 0;
    }

    .set_in_img{
      opacity: 1;
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
          text: '地球暖化',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625127854750.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DxXRlpQE4s9MPRnFuv90NlV7tl0OX8Mx7G0YVC%2Fvykudj2ggEMSXphFtwI0P%2BRGpVwnYwaF8RACP1tTRqcnBt8G0oGxZceB9WsBDyaqeAowjXXb6SCEyX1KD14%2BUWFeKs7WILbuYTvnHrSC%2BfTMFJAWkJv2F3XrXsKiqMBDUu%2F4lfCznygZ2Ufa6qpZzlpDAPhldKQ2OyG4bDwBYp9k2AZWzdEgQno9%2FwNrR73Y%2BWFbJ%2Fe2RaC6CE4h4VBFt8pGE5K9z4Rf9jxhew1hm3%2FK71b9arr0YYTUNYYcvMXJtlV2yp8l1zD7OK9%2BCUgpQcMJVXCVEyivUbpEiufuEi7Ir1g%3D%3D',
        },
        {
          id: 1,
          text: '野生棲息地被破壞',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625128634449.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mFvbU4Uwg0eVHxsNXz6tw3kNu0AEyHJvuS83zCfQiXzp9Xv1uUmHmPdB%2B7E6Pwfq4JkU4gVBDRqufsf1twCCHdnEaXZAoP1M32onYfeaP4YVA9bAZ0r2CRZKJ%2FGDl4nfdEwNfN92LyBpL5CPrX47fkOYIq7GCUVbDIvWdXDA0uluqbTHeiVrcP82N92W8uyzk3OpC5SzfqKXfnFkSps3cNDDnx6NnjFllC%2Bm%2FcOpBgFyhM24fn5%2FXHeIL0THijvTFPCaTDfuYK3NGLLOXGG5S%2Fmw8ckw7QzlahCQhs%2BT9hjBplbeNOfHF4Rkt7jOr3yCITTNw9OUu6dmNhfiEd3uhQ%3D%3D',
        },
        {
          id: 2,
          text: '外來種入侵',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625127388125.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TgxsXewMCVxhphqDz2qry8NzJjU3I0CWXko0vWSmL%2FEeU9oe3%2BaAFlMp5GF0O82SjFYByUzKldixsijxSbaVu%2BUxw5%2B%2BecewJBluPl88Y%2BbHZHdTSBvWo9x4g6MBzZ2Wh8enT8MrcyGyAPU9jQ%2FjZPTNLQfGHoM0Rct8OEfzR6cbZ%2BMCgx%2Bgx%2FhRzCBCqSSH%2B3z9yl3b5ZCOoPROpZaDgiJbUQFH5riNVGs6tidXkeW5S79v0zp0HKiH14C0f%2F89uTKNBxpPY2tYvM1wuTC9zqPwOjqENZWm%2FUKKKlv5hTCuGolsZA%2BZcIuVfUwRpLkhbchPGBSel4uvbdE84wa48A%3D%3D',
        },
        // {
        //   id: 3,
        //   text: '流浪貓狗侵略',
        //   img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1624809241290.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=J%2FlPCMGLNe80ezqK6b60xxZZXtCioV9kiTC1SDcP3fNSQJprQPFpcQU2wpcy9dsZe1Xl7TdM7VxENM5WBApYKhyZos20d9fdgpNJ%2BfO3qBlADa8AoN1ehU4Gmomp4GzmZ6I0zSwav%2BSgTbEDHeijq%2BtkQYWyUrlY%2B%2FcF9uB%2B9spcPbjPnNyod8aA8nsQbQtTV8s8LgGcRGXAdQr6VurtmdimoHnAwZ79jLf1A7jcZIMCCIUbucmbc4NKe6Rc1eZWMMBY6BNR6qcO8YXyj%2B6AlhEjEZ4s1sZRSn9nb%2FghAW6YnEhWFV2qTxVQD6YxTeBBqaXpPSVoRt7B83LEyan0ng%3D%3D',
        // },
        // {
        //   id: 4,
        //   text: '惡意放生',
        //   img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1624809241290.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=J%2FlPCMGLNe80ezqK6b60xxZZXtCioV9kiTC1SDcP3fNSQJprQPFpcQU2wpcy9dsZe1Xl7TdM7VxENM5WBApYKhyZos20d9fdgpNJ%2BfO3qBlADa8AoN1ehU4Gmomp4GzmZ6I0zSwav%2BSgTbEDHeijq%2BtkQYWyUrlY%2B%2FcF9uB%2B9spcPbjPnNyod8aA8nsQbQtTV8s8LgGcRGXAdQr6VurtmdimoHnAwZ79jLf1A7jcZIMCCIUbucmbc4NKe6Rc1eZWMMBY6BNR6qcO8YXyj%2B6AlhEjEZ4s1sZRSn9nb%2FghAW6YnEhWFV2qTxVQD6YxTeBBqaXpPSVoRt7B83LEyan0ng%3D%3D',
        // },
        {
          id: 5,
          text: '海洋汙染',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625127527250.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ZtY8RZgcfqInZKrxt%2F9Mcpp%2BXJgL99GpoR8ffCLZmn2hQ8%2BeSd2rQ2vm3mNMK5oqM4PAMS5mwqQXX75KDfEjJkQFYGeWE5qCDQ2DhCyn1p8z0%2FHXvudAc4NAgti%2FRanIn8o0ZUVPtoxMySuFwVCMKORESNt5MRHG1CBCqaoPIFsA5rXymxfEaN46driWCf5E%2FL7jhg1nRgpjMSFWkQFKJYOcon4UWjA9RhfVx6DOdAqDgPBugz%2FsI2Gp0N7yPJ%2Fwk7NicesEKsuyyhOFfoQ7LyftzwmdUFg38uCkQXFXiaHvUUsCbRd1s1lOocAyNSm3ecU1LIa%2BfzXDs7CsCKaYVA%3D%3D',
        },
      ],
    };
  },
};
</script>
