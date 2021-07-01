<template>
  <section class="row m-0">
    <template
      v-for="item in naturalThreatImgs"
      :key="item.img"
    >

      <div class="col-sm-6 col-md-4 mb-2">
        <div class="set_in_style rounded-2">
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
      opacity: .5;
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
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1624809241290.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=J%2FlPCMGLNe80ezqK6b60xxZZXtCioV9kiTC1SDcP3fNSQJprQPFpcQU2wpcy9dsZe1Xl7TdM7VxENM5WBApYKhyZos20d9fdgpNJ%2BfO3qBlADa8AoN1ehU4Gmomp4GzmZ6I0zSwav%2BSgTbEDHeijq%2BtkQYWyUrlY%2B%2FcF9uB%2B9spcPbjPnNyod8aA8nsQbQtTV8s8LgGcRGXAdQr6VurtmdimoHnAwZ79jLf1A7jcZIMCCIUbucmbc4NKe6Rc1eZWMMBY6BNR6qcO8YXyj%2B6AlhEjEZ4s1sZRSn9nb%2FghAW6YnEhWFV2qTxVQD6YxTeBBqaXpPSVoRt7B83LEyan0ng%3D%3D',
        },
        {
          id: 1,
          text: '野生棲息地被破壞',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1624809241290.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=J%2FlPCMGLNe80ezqK6b60xxZZXtCioV9kiTC1SDcP3fNSQJprQPFpcQU2wpcy9dsZe1Xl7TdM7VxENM5WBApYKhyZos20d9fdgpNJ%2BfO3qBlADa8AoN1ehU4Gmomp4GzmZ6I0zSwav%2BSgTbEDHeijq%2BtkQYWyUrlY%2B%2FcF9uB%2B9spcPbjPnNyod8aA8nsQbQtTV8s8LgGcRGXAdQr6VurtmdimoHnAwZ79jLf1A7jcZIMCCIUbucmbc4NKe6Rc1eZWMMBY6BNR6qcO8YXyj%2B6AlhEjEZ4s1sZRSn9nb%2FghAW6YnEhWFV2qTxVQD6YxTeBBqaXpPSVoRt7B83LEyan0ng%3D%3D',
        },
        {
          id: 2,
          text: '外來種入侵',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1624809241290.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=J%2FlPCMGLNe80ezqK6b60xxZZXtCioV9kiTC1SDcP3fNSQJprQPFpcQU2wpcy9dsZe1Xl7TdM7VxENM5WBApYKhyZos20d9fdgpNJ%2BfO3qBlADa8AoN1ehU4Gmomp4GzmZ6I0zSwav%2BSgTbEDHeijq%2BtkQYWyUrlY%2B%2FcF9uB%2B9spcPbjPnNyod8aA8nsQbQtTV8s8LgGcRGXAdQr6VurtmdimoHnAwZ79jLf1A7jcZIMCCIUbucmbc4NKe6Rc1eZWMMBY6BNR6qcO8YXyj%2B6AlhEjEZ4s1sZRSn9nb%2FghAW6YnEhWFV2qTxVQD6YxTeBBqaXpPSVoRt7B83LEyan0ng%3D%3D',
        },
        {
          id: 3,
          text: '流浪貓狗侵略',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1624809241290.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=J%2FlPCMGLNe80ezqK6b60xxZZXtCioV9kiTC1SDcP3fNSQJprQPFpcQU2wpcy9dsZe1Xl7TdM7VxENM5WBApYKhyZos20d9fdgpNJ%2BfO3qBlADa8AoN1ehU4Gmomp4GzmZ6I0zSwav%2BSgTbEDHeijq%2BtkQYWyUrlY%2B%2FcF9uB%2B9spcPbjPnNyod8aA8nsQbQtTV8s8LgGcRGXAdQr6VurtmdimoHnAwZ79jLf1A7jcZIMCCIUbucmbc4NKe6Rc1eZWMMBY6BNR6qcO8YXyj%2B6AlhEjEZ4s1sZRSn9nb%2FghAW6YnEhWFV2qTxVQD6YxTeBBqaXpPSVoRt7B83LEyan0ng%3D%3D',
        },
        {
          id: 4,
          text: '惡意放生',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1624809241290.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=J%2FlPCMGLNe80ezqK6b60xxZZXtCioV9kiTC1SDcP3fNSQJprQPFpcQU2wpcy9dsZe1Xl7TdM7VxENM5WBApYKhyZos20d9fdgpNJ%2BfO3qBlADa8AoN1ehU4Gmomp4GzmZ6I0zSwav%2BSgTbEDHeijq%2BtkQYWyUrlY%2B%2FcF9uB%2B9spcPbjPnNyod8aA8nsQbQtTV8s8LgGcRGXAdQr6VurtmdimoHnAwZ79jLf1A7jcZIMCCIUbucmbc4NKe6Rc1eZWMMBY6BNR6qcO8YXyj%2B6AlhEjEZ4s1sZRSn9nb%2FghAW6YnEhWFV2qTxVQD6YxTeBBqaXpPSVoRt7B83LEyan0ng%3D%3D',
        },
        {
          id: 5,
          text: '海洋汙染',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1624809241290.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=J%2FlPCMGLNe80ezqK6b60xxZZXtCioV9kiTC1SDcP3fNSQJprQPFpcQU2wpcy9dsZe1Xl7TdM7VxENM5WBApYKhyZos20d9fdgpNJ%2BfO3qBlADa8AoN1ehU4Gmomp4GzmZ6I0zSwav%2BSgTbEDHeijq%2BtkQYWyUrlY%2B%2FcF9uB%2B9spcPbjPnNyod8aA8nsQbQtTV8s8LgGcRGXAdQr6VurtmdimoHnAwZ79jLf1A7jcZIMCCIUbucmbc4NKe6Rc1eZWMMBY6BNR6qcO8YXyj%2B6AlhEjEZ4s1sZRSn9nb%2FghAW6YnEhWFV2qTxVQD6YxTeBBqaXpPSVoRt7B83LEyan0ng%3D%3D',
        },
      ],
    };
  },
};
</script>
